"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [balanceSheet, setBalanceSheet] = useState([]);
  const [message, setMessage] = useState("");
  const [buyer, setBuyer] = useState("Olin");
  const [seller, setSeller] = useState("Olin");
  const [numShares, setNumShares] = useState(1);
  const [currentSharePrice, setCurrentSharePrice] = useState(0);
  const [organizationMoney, setOrganizationMoney] = useState(0);

  const API_BASE_URL = "http://127.0.0.1:8000"; // FastAPI backend URL

  // Fetch balance sheet from backend
  const fetchBalanceSheet = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/balance_sheet`);
      setBalanceSheet(response.data.balance_sheet);
      console.log(response.data.balance_sheet);
    } catch (error) {
      console.error("Error fetching balance sheet:", error);
      console.log(error.response?.data);
      console.log(error.message);
    }
  };

  // Fetch current share price and organization money
  const fetchMarketData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/market_data`);
      setCurrentSharePrice(response.data.current_share_price);
      setOrganizationMoney(response.data.organization_money);
    } catch (error) {
      console.error("Error fetching market data:", error);
    }
  };

  // IPO sale function
  const handleIpoSale = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/ipo_sale`, null, {
        params: {
          buyer,
          num_shares: numShares,
        },
      });
      setMessage(response.data.message);
      await fetchBalanceSheet();
      await fetchMarketData();
    } catch (error) {
      setMessage(error.response?.data?.detail || "Error during IPO sale");
      console.error(error);
    }
  };

  // Market maker trade (buy from market maker)
  // Market maker trade (buy from market maker)
  const handleBuyFromMarketMaker = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/market_maker_trade`,
        null,
        {
          params: {
            buyer,
            num_shares: numShares,
          },
        }
      );
      setMessage(response.data.message);
      await fetchBalanceSheet();
      await fetchMarketData();
    } catch (error) {
      setMessage(
        error.response?.data?.detail ||
          error.response?.data?.message ||
          "Error during market maker trade"
      );
      console.error(error);
    }
  };

  // Market maker trade (sell to market maker)
  // Market maker trade (sell to market maker)
  const handleSellToMarketMaker = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/market_maker_trade`,
        null,
        {
          params: {
            seller,
            num_shares: numShares,
          },
        }
      );
      setMessage(response.data.message);
      await fetchBalanceSheet();
      await fetchMarketData();
    } catch (error) {
      setMessage(
        error.response?.data?.detail ||
          error.response?.data?.message ||
          "Error during market maker trade"
      );
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch balance sheet and market data on component mount
    fetchBalanceSheet();
    fetchMarketData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trading App</h1>

      <h2 className="text-xl font-semibold mb-2">
        Current Share Price: ${currentSharePrice.toFixed(2)}
      </h2>
      <h2 className="text-xl font-semibold mb-4">
        Organization Money: ${organizationMoney.toFixed(2)}
      </h2>

      <h2 className="text-xl font-semibold mb-2">Balance Sheet</h2>
      <table className="table-auto border-collapse border border-gray-400 mb-6">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Shares</th>
            <th className="border border-gray-300 px-4 py-2">Money</th>
          </tr>
        </thead>
        <tbody>
          {balanceSheet.map((person) => (
            <tr key={person.name}>
              <td className="border border-gray-300 px-4 py-2">
                {person.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {person.shares}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${person.money.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mb-2">IPO Sale</h2>
      <div className="mb-6">
        <label className="block mb-2" style={{ color: "red" }}>
          Buyer:
          <select
            className="ml-2 border rounded"
            value={buyer}
            onChange={(e) => setBuyer(e.target.value)}
          >
            <option value="Olin">Olin</option>
            <option value="Mig">Mig</option>
            <option value="Albert">Albert</option>
          </select>
        </label>
        <label className="block mb-2" style={{ color: "red" }}>
          Number of Shares:
          <input
            className="ml-2 border rounded"
            type="number"
            min="1"
            value={numShares}
            onChange={(e) => setNumShares(Number(e.target.value))}
          />
        </label>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleIpoSale}
        >
          Buy in IPO
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Market Maker Trade</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Buy from Market Maker</h3>
        <label className="block mb-2">
          Buyer:
          <select
            className="ml-2 border rounded"
            value={buyer}
            onChange={(e) => setBuyer(e.target.value)}
          >
            <option value="Olin">Olin</option>
            <option value="Mig">Mig</option>
            <option value="Albert">Albert</option>
          </select>
        </label>
        <label className="block mb-2">
          Number of Shares:
          <input
            className="ml-2 border rounded"
            type="number"
            min="1"
            value={numShares}
            onChange={(e) => setNumShares(Number(e.target.value))}
          />
        </label>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleBuyFromMarketMaker}
        >
          Buy from Market Maker
        </button>

        <h3 className="font-semibold mb-2 mt-6">Sell to Market Maker</h3>
        <label className="block mb-2">
          Seller:
          <select
            className="ml-2 border rounded"
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
          >
            <option value="Olin">Olin</option>
            <option value="Mig">Mig</option>
            <option value="Albert">Albert</option>
          </select>
        </label>
        <label className="block mb-2">
          Number of Shares:
          <input
            className="ml-2 border rounded"
            type="number"
            min="1"
            value={numShares}
            onChange={(e) => setNumShares(Number(e.target.value))}
          />
        </label>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleSellToMarketMaker}
        >
          Sell to Market Maker
        </button>
      </div>

      {message && (
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h3 className="font-semibold">Message:</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
