import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    associate: [
        {
          name: "Company A",
          industry: "Technology",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "https://via.placeholder.com/150/FF5733/FFFFFF/?text=Company+A"
        },
        {
          name: "Company B",
          industry: "Finance",
          description: "Nulla vehicula odio sed felis tincidunt, id tincidunt mauris interdum.",
          image: "https://via.placeholder.com/150/30AFFF/FFFFFF/?text=Company+B"
        },
        {
          name: "Company C",
          industry: "Healthcare",
          description: "Vestibulum nec tortor sit amet risus aliquet ultrices nec nec dui.",
          image: "https://via.placeholder.com/150/FF33FF/FFFFFF/?text=Company+C"
        },
        {
          name: "Company D",
          industry: "Retail",
          description: "Fusce sed enim vitae orci cursus congue sit amet nec risus.",
          image: "https://via.placeholder.com/150/33FF33/FFFFFF/?text=Company+D"
        },
        {
          name: "Company E",
          industry: "Hospitality",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          image: "https://via.placeholder.com/150/FF3300/FFFFFF/?text=Company+E"
        },
        {
          name: "Company F",
          industry: "Education",
          description: "Curabitur commodo urna in nisi congue, vitae laoreet elit malesuada.",
          image: "https://via.placeholder.com/150/FFD700/FFFFFF/?text=Company+F"
        },
        {
          name: "Company G",
          industry: "Manufacturing",
          description: "Donec dapibus quam nec justo varius, eget condimentum urna sollicitudin.",
          image: "https://via.placeholder.com/150/9966FF/FFFFFF/?text=Company+G"
        },
        {
          name: "Company H",
          industry: "Automotive",
          description: "Integer nec arcu vel ex iaculis dictum vel id ante.",
          image: "https://via.placeholder.com/150/66FF33/FFFFFF/?text=Company+H"
        },
        {
          name: "Company I",
          industry: "Entertainment",
          description: "Sed et enim eget quam elementum tempus nec et nisi.",
          image: "https://via.placeholder.com/150/FF66CC/FFFFFF/?text=Company+I"
        },
        {
          name: "Company J",
          industry: "Real Estate",
          description: "Phasellus tincidunt ligula nec magna pharetra, vitae gravida magna mollis.",
          image: "https://via.placeholder.com/150/66CCFF/FFFFFF/?text=Company+J"
        }
      ],
};

const partnerSlice = createSlice({
    name: "partner",
    initialState,
    reducers: {},
})

export default partnerSlice.reducer;