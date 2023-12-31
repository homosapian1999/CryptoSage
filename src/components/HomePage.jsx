import React from "react";
import millify from "millify";
import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";

import { Cryptocurrencies, News } from "../components";
import Loader from "./Loader";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {/* Total 24 in antd */}
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">
            <PlusOutlined />
          </Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Cryto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">
            <PlusOutlined />
          </Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
