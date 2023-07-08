import React from "react";
import {
  CryptoDeatils,
  Cryptocurrencies,
  Homepage,
  Navbar,
  News,
} from "./components";
import "./App.css";
import { Layout, Space, Typography } from "antd";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route
                path="/cryptocurrencies/crypto/:coinId"
                element={<CryptoDeatils />}
              />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CoinSage by homosapian
            <br />
            Copyright &copy; 2023. All Rights Reserved
          </Typography.Title>

          <Space>
            <Link to="/">Home |</Link>
            <Link to="/cryptocurrencies">Cryptos |</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
