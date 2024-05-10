import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { data } from "../../src/data.js";
import { NavLink } from "react-router-dom";

const MiddleSide = ({ setType }) => {
  const newData = data.slice(0, 20);
  const [date, setDate] = useState(new Date());
  const [search, setSearch] = useState("");
  console.log(search);
  const [tab, setTab] = useState(0);
  const [style, setStyle] = useState(0);
  const handleStyle = (index) => {
    setStyle(index);
  };

  return (
    <div className="bg-opacity w-full">
      <div className="relative pl-[10px] pr-[38px] pt-6">
        <nav className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="mb-1 text-[28px] font-semibold text-white">
              Jaegar Resto
            </h1>
            <p className="font-normal text-[#E0E6E9]">{date.toDateString()}</p>
          </div>
          <div className="py-2">
            <form className="flex w-[220px] items-center gap-2 rounded-lg border border-[#393C49] bg-[#2D303E] p-[14px] leading-[140%] hover:border-[#EA7C69] hover:bg-[#393C49] hover:text-white">
              <CgSearch className="h-5 w-5 text-[#ABBBC2]" />
              <input
                type="search"
                id="default-search"
                // value={input}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[164px] rounded-lg bg-transparent text-sm font-normal text-[#ABBBC2] placeholder-[#6B7280] outline-none transition-all duration-300 ease-in-out hover:text-white"
                placeholder="Search for food, coffee, etc.."
                required
              />
            </form>
          </div>
        </nav>
        <header className="mb-6">
          <ul className="mb-2 flex gap-10">
            {[
              "Hot Dishes",
              "Cold Dishes",
              "Soup",
              "Grill",
              "Appetizer",
              "Dessert",
            ].map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setTab(index);
                  handleTabClick(index);
                }}
                className={`relative pb-[13px] text-sm font-semibold leading-[140%] hover:text-[#EA7C69] ${
                  tab === index
                    ? "activeIndicator text-[#EA7C69]"
                    : "indicator text-white"
                }`}
              >
                {item}
              </li>
            ))}
            {/* <li
              onClick={() => {
                setTab(0);
              }}
              className="activeIndicator relative pb-[13px] text-sm font-semibold leading-[140%] text-[#EA7C69] hover:text-[#EA7C69]"
            >
              Hot Dishes
            </li>
            <li
              onClick={() => {
                setTab(1);
              }}
              className="indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
            >
              Cold Dishes
            </li>
            <li
              onClick={() => {
                setTab(2);
              }}
              className="indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
            >
              Soup
            </li>
            <li
              onClick={() => {
                setTab(3);
              }}
              className="indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
            >
              Grill
            </li>
            <li
              onClick={() => {
                setTab(4);
              }}
              className="indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
            >
              Appetizer
            </li>
            <li
              onClick={() => {
                setTab(5);
              }}
              className="indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
            >
              Dessert
            </li> */}
          </ul>
          <hr className="h-[1px] border-none bg-[#393C49]" />
        </header>
        <main>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold leading-[140%] text-white">
              Choose Dishes
            </h2>
            <select
              name="type"
              onChange={(e) => {
                setType(e.target.value);
              }}
              className="h-12 w-[100px] rounded-lg border border-[#393C49] bg-[#1F1D2B] p-[14px] text-sm font-medium text-white outline-none"
            >
              <option value="dineIn">Dine In</option>
              <option value="togo">To Go</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
          {tab === 0 && (
            <div className="apiData h-[560px] overflow-y-scroll p-2 pt-10">
              <div className="relative grid grid-cols-4 gap-y-14">
                {newData
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.name.toLowerCase().includes(search);
                  })
                  .map((item) => (
                    <div
                      key={item.id}
                      className="card relative flex h-[226px] w-[192px] flex-col items-center justify-center rounded-2xl bg-[#1F1D2B] pt-20 shadow-2xl"
                    >
                      <img
                        className="absolute top-0 mt-[-36px] h-[132px] w-[132px] rounded-full"
                        src={item.image}
                        alt="Food Img"
                      />
                      <p className="mb-2 text-sm font-medium leading-[130%] text-white">
                        {item.name}
                      </p>
                      <p className="mb-1 text-sm font-normal leading-[140%] text-white">
                        $ {item.price}
                      </p>
                      <button
                        className="text-sm font-normal leading-[140%] text-[#ABBBC2]"
                        onClick={() => {
                          localStorage.setItem(
                            "addToCart",
                            JSON.stringify(item),
                          );
                        }}
                      >
                        {item.count} Bowls available
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}
          {tab === 1 && (
            <div>
              <h1 className="text-2xl font-semibold text-white">
                There may be have Cold Dishes
              </h1>
            </div>
          )}
          {tab === 2 && (
            <div>
              <h1 className="text-2xl font-semibold text-white">
                There may be have Soup
              </h1>
            </div>
          )}
          {tab === 3 && (
            <div>
              <h1 className="text-2xl font-semibold text-white">
                There may be have Grill
              </h1>
            </div>
          )}
          {tab === 4 && (
            <div>
              <h1 className="text-2xl font-semibold text-white">
                There may be have Appetizer
              </h1>
            </div>
          )}
          {tab === 5 && (
            <div>
              <h1 className="text-2xl font-semibold text-white">
                There may be have Dessert
              </h1>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MiddleSide;
