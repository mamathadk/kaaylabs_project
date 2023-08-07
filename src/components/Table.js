import React, { useState } from "react";
import { connect } from "react-redux";
import { FETCH_BEERS_SUCCESS } from "../redux/beerSlice";
import { Table } from "antd";
import DatePickers from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { DatePicker, Space } from "antd";
import "../App.css";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    // width: '0%',
  },
  {
    title: "Abv",
    dataIndex: "abv",
    // width: '70%',
  },
  {
    title: "Attenuation Level",
    dataIndex: "attenuation_level",
    // width: '70%',
  },
  {
    title: "Boil volume in liters",
    dataIndex: "boil_volume",
    // width: '70%',
    render: (boilVolume) => boilVolume.value,
  },
  {
    title: "Brewers Tips",
    dataIndex: "brewers_tips",
    // width: '0%',
  },
  {
    title: "Contributed By",
    dataIndex: "contributed_by",
    // width: '70%',
  },
  {
    title: "Description",
    dataIndex: "description",
    width: "100%",
  },
  {
    title: "Ebc",
    dataIndex: "ebc",
    // width: '70%',
  },
  {
    title: "First Brewed",
    dataIndex: "first_brewed",
    // width: '70%',
    // defaultSortOrder: "ascend",
    // sorter: (a, b) => a.first_brewed.localeCompare(b.first_brewed),
  },
  {
    title: "Food Pairing",
    dataIndex: "food_pairing",
    // width: '70%',
  },
  {
    title: "Ibu",
    dataIndex: "ibu",
    // width: '70%',
  },
  {
    title: "Image URL",
    dataIndex: "image_url",
    // width: '70%',
  },
  {
    title: "Name",
    dataIndex: "name",
    // width: '70%',
  },
  {
    title: "Ph",
    dataIndex: "ph",
    // width: '70%',
  },
  {
    title: "Tagline",
    dataIndex: "tagline",
    // width: '70%',
  },
  {
    title: "Srm",
    dataIndex: "srm",
    // width: '70%',
  },
  {
    title: "Target og",
    dataIndex: "target_og",
    // width: '70%',
  },
  {
    title: "Target fg",
    dataIndex: "target_fg",
    // width: '70%',
  },
  {
    title: "volume in lts",
    dataIndex: "volume",
    // width: '70%',
    render: (Volume) => Volume.value,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Tables = (props) => {
  const { usersData } = props;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    filterDataByDateRange(date, endDate);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
    //console.log(date);
    filterDataByDateRange(startDate, date);
  };

  const filterDataByDateRange = (startDate, endDate) => {
    if (!startDate || !endDate) {
      setFilteredData([]);

      return;
    }

    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    const filteredData = usersData.filter(
      (item) =>
        item.first_brewed >= formattedStartDate &&
        item.first_brewed <= formattedEndDate
    );
    setFilteredData(filteredData);
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };
  return (
    <div>
      <div className="filter">
        <div className="">
          <label>Brewed Before : </label>
          <DatePickers
            id="startDatePicker"
            selected={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="">
          <label>Brewed After : </label>
          <DatePickers
            id="endDatePicker"
            selected={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>

      {filteredData.length > 0 ? (
        <Table
          columns={columns}
          dataSource={filteredData}
          onChange={onChange}
        />
      ) : (
        <Table columns={columns} dataSource={usersData} onChange={onChange} />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    beersDispatch: (data) => dispatch(FETCH_BEERS_SUCCESS(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
