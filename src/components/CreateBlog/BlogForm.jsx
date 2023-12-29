import React from "react";
import FileIcon from "../Icons/FileIcon";

import Button from "../Button";
export default function BlogForm() {
  return (
    <div className="container">
      <div>
        <label>ატვირთეთ ფოტო</label>

        <div className="w-[600px] h-[180px] rounded-xl border border-dashed border-light-grey bg-lightest-grey flex flex-col items-center justify-center gap-[24px] mt-[8px]">
          <FileIcon />
          <p className="text-[14px] not-italic leading-5 font-normal ">
            ჩააგდეთ ფაილი აქ ან
            <span className="underline cursor-pointer text-black text-[14px] not-italic leading-5 font-medium ml-[5px]">
              აირჩიეთ ფაილი
            </span>
          </p>
        </div>

        <div className="flex gap-[24px] flex-wrap my-[24px]">
          <div className="flex flex-col items-start">
            <label>ავტორი *</label>
            <input
              placeholder="შეიყვნეთ ავტორი"
              className="w-[288px] h-[44px] border rounded-[12px] pl-[16px] py-[12px] mt-[8px]"
            />
          </div>
          <div className="flex flex-col items-start">
            <label>სათაური *</label>
            <input
              placeholder="შეიყვნეთ სათაური"
              className="w-[288px] h-[44px] border rounded-[12px] pl-[16px] py-[12px] mt-[8px]"
            />
          </div>
        </div>
        <div className="mb-[24px] flex flex-col">
          <label>აღწერა *</label>
          <input
            placeholder="შეიყვნეთ აღწერა"
            className="w-[600px] h-[124px] border rounded-[12px] pl-[16px] mt-[8px]"
          />
        </div>
        <div className="flex gap-[24px] flex-wrap">
          <div className="flex flex-col">
            <label>გამოქვეყნების თარიღი *</label>
            <input
              type="date"
              className="w-[288px] h-[44px] border rounded-[12px] px-[16px] mt-[8px]"
            />
          </div>
          <div className="flex flex-col">
            <label>კატეგორია *</label>
            <input
              type="text"
              className="w-[288px] h-[44px] border rounded-[12px] pl-[16px] py-[12px] mt-[8px]"
            />
          </div>
          <div className="flex flex-col">
            <label>ელ-ფოსტა</label>
            <input
              type="email"
              placeholder="Example@redberry.ge"
              className="w-[288px] h-[44px] border rounded-[12px] pl-[16px] py-[12px] mt-[8px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-[40px]">
        <button className="px-[20px] py-[10px] bg-primary w-[288px] text-white border rounded-[8px] text-[14px] font-medium leading-5 cursor-pointer">
          გამოქვეყნება
        </button>
      </div>
    </div>
  );
}
