import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FETCH_BEERS_SUCCESS } from "../redux/beerSlice";
import { Pagination } from "antd";
import { Button, Table } from "antd";
import { DatePicker, Space } from "antd";
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
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.first_brewed.localeCompare(b.first_brewed),
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
  const [pickafterdate, setpickafterdate] = useState();
  const [pickbeforedate, setpickbeforedate] = useState();

  const beforedate = (date, dateString) => {
    setpickbeforedate(dateString);
    console.log("before", dateString);
  };
  const afterdate = (date, dateString) => {
    setpickafterdate(dateString);
    console.log("after", dateString);
  };
  //   const beers = useSelector((state) => state.beers.beers);

  function filteritems() {
    if (usersData.first_brewed === pickafterdate) {
      // debugger
      console.log(usersData.name);
    } else if (usersData.first_brewed === pickbeforedate) {
      // debugger
      console.log(usersData.name);
    }
  }
  const { usersData } = props;
  console.log(usersData);
  return (
    <div>
      <div className="filter">
        {/* <Space direction="horizontal"> */}
        <div className="">
          <label>Brewed Before : </label>
          <DatePicker
            style={{ marginLeft: "20px" }}
            onChange={beforedate}
            picker="month"
          />
        </div>
        <div className="">
          <label>Brewed After : </label>
          <DatePicker
            style={{ marginLeft: "20px" }}
            onChange={afterdate}
            picker="month"
          />
        </div>
        {/* </Space> */}
        <Button type="primary" onClick={filteritems}>
          Filter
        </Button>
      </div>
      <Table columns={columns} dataSource={usersData} onChange={onChange} />
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
