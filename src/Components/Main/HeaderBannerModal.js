import React, { useState } from "react";
import styled from "styled-components";
import { getNextDay } from "../../utility/helper";

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

const FieldWrapper = styled.div`
  position: relative;
  flex: 1;
  margin-bottom: 10px;
  min-width: 0; /* 🔥 prevents overflow */
`;

const ModalWrapper = styled.div`
  border-radius: 8px;
  background-color: rgba(238, 238, 238, 0.85);
  width: 100%;
  max-width: 500px; /* prevents full stretch on large screens */
  margin: 0 auto; /* center horizontally */
  padding: 30px 20px 10px 20px;

  @media (max-width: 600px) {
    max-width: 80%;
    padding: 20px 12px 1px 12px;
  }
`;

const InputBar = styled.input`
  width: 100%;
  box-sizing: border-box; /* 🔥 critical fix */
  padding: 5px 20px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;

  @media (max-width: 600px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

const DatePicker = styled.input`
  width: 100%;
  min-width: 0; /* 🔥 allows shrinking */
  box-sizing: border-box; /* 🔥 critical fix */
  padding: 12px 20px 5px 20px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  appearance: none;
  -webkit-appearance: none;

  @media (max-width: 600px) {
    padding: 8px 10px;
    font-size: 12px;
  }
`;

const DropdownSelection = styled.select`
  width: 100%;
  box-sizing: border-box; /* 🔥 critical fix */
  padding: 12px 20px 5px 20px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  appearance: none;
  -webkit-appearance: none;

  @media (max-width: 600px) {
    padding: 8px 10px;
    font-size: 12px;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -15px;
  left: 1px;
  font-size: 10px;
  font-weight: 700;
  padding: 0 4px;
`;

const SendButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: -8px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #1aab54;
  color: #ffffff;
  font-weight: 400;
  border: 2px solid #eeeeee;
  padding: 10px 15px;
  &:hover {
    color: #0c2c55;
  }
  @media (max-width: 600px) {
    padding: 8px 10px;
    font-size: 12px;
  }
`;
function HeaderBannerModal() {
  const today = new Date().toISOString().split("T")[0];
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(getNextDay(today));
  const [vehicle, setVehicle] = useState(" -- Vehicle --");
  const [vehicleType, setVehicleType] = useState("-- Vehicle Type --");

  React.useEffect(() => {
    setEndDate(getNextDay(startDate));
  }, [startDate]);

  const handleCheckAvailability = () => {
    if (location && location?.length > 0 && endDate?.length > 0) {
      const td = new Date().setHours(0, 0, 0, 0);
      const stDate = new Date(startDate).setHours(0, 0, 0, 0);
      const edDate = new Date(endDate).setHours(0, 0, 0, 0);
      if (stDate < td) window.alert("Start date cannot be in past");
      else if (stDate > edDate)
        window.alert("End date cannot be before start date");
      else {
        const enquiryText = encodeURIComponent(
          `Hello, I'd like to book car with Sunny Car! Below is my requirement,\n
- Pickup location: ${location}
- Trip start date: ${startDate}
- Trip end date: ${endDate}
- Vehicle: ${vehicle.trim() === "-- Vehicle --" ? "Any" : vehicle}
        `,
        );
        window.location.href = `https://wa.me/917030499720?text=${enquiryText}`;
      }
    } else
      window.alert(
        "Kindly fill all required details: Pickup location, start & end date.",
      );
  };

  return (
    <ModalWrapper>
      <FieldWrapper>
        <Label>Pick-up Location</Label>
        <InputBar
          placeholder="Pick-up Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
      </FieldWrapper>
      {/* Date Pickers */}
      <Row>
        <FieldWrapper>
          <Label>Trip start date</Label>
          <DatePicker
            type="date"
            placeholder="Trip start date"
            min={today}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Trip end date</Label>
          <DatePicker
            type="date"
            placeholder="Trip end date"
            min={startDate}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <br />
        </FieldWrapper>
      </Row>

      {/* Vehicle selections */}
      <Row>
        <FieldWrapper>
          <Label>Vehicle choice</Label>
          <DropdownSelection
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option>-- Vehicle --</option>
            <option>Ertiga</option>
            <option>Innova</option>
            <option>Swift</option>
          </DropdownSelection>
        </FieldWrapper>

        <FieldWrapper>
          <Label>Vehicle type</Label>
          <DropdownSelection
            placeholder="Vehicle Type"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option>-- Vehicle Type --</option>
            <option>All</option>
            <option>SUV</option>
            <option>Hatchback</option>
          </DropdownSelection>
        </FieldWrapper>
      </Row>
      <SendButton onClick={handleCheckAvailability}>
        Check availability
      </SendButton>
    </ModalWrapper>
  );
}

export default HeaderBannerModal;
