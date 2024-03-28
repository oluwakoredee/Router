/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    contacts: [
        {
          name: "John Doe",
          phone: "123-456-7890",
          email: "john@example.com",
          image: "https://via.placeholder.com/150/FF5733/FFFFFF/?text=John"
        },
        {
          name: "Jane Smith",
          phone: "987-654-3210",
          email: "jane@example.com",
          image: "https://via.placeholder.com/150/30AFFF/FFFFFF/?text=Jane"
        },
        {
          name: "Alice Johnson",
          phone: "555-123-4567",
          email: "alice@example.com",
          image: "https://via.placeholder.com/150/FF33FF/FFFFFF/?text=Alice"
        },
        {
          name: "Bob Anderson",
          phone: "777-888-9999",
          email: "bob@example.com",
          image: "https://via.placeholder.com/150/33FF33/FFFFFF/?text=Bob"
        },
        {
          name: "Emma Davis",
          phone: "444-555-6666",
          email: "emma@example.com",
          image: "https://via.placeholder.com/150/FF3300/FFFFFF/?text=Emma"
        },
        {
          name: "Michael Brown",
          phone: "222-333-4444",
          email: "michael@example.com",
          image: "https://via.placeholder.com/150/FFD700/FFFFFF/?text=Michael"
        },
        {
          name: "Olivia Wilson",
          phone: "111-222-3333",
          email: "olivia@example.com",
          image: "https://via.placeholder.com/150/9966FF/FFFFFF/?text=Olivia"
        },
        {
          name: "William Martinez",
          phone: "666-777-8888",
          email: "william@example.com",
          image: "https://via.placeholder.com/150/66FF33/FFFFFF/?text=William"
        },
        {
          name: "Sophia Garcia",
          phone: "999-000-1111",
          email: "sophia@example.com",
          image: "https://via.placeholder.com/150/FF66CC/FFFFFF/?text=Sophia"
        },
        {
          name: "James Taylor",
          phone: "333-444-5555",
          email: "james@example.com",
          image: "https://via.placeholder.com/150/66CCFF/FFFFFF/?text=James"
        }
      ],
};

const contactSlice = createSlice({
  name: "career",
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
