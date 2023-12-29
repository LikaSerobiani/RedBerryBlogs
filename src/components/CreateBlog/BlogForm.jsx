import React from "react";
import FileIcon from "../Icons/FileIcon";
import Input from "../Input";
import Button from "../Button";
export default function BlogForm() {
  return (
    <div className="container">
      <div>
        <span className="not-italic font-medium	text-[14px] leading-5 text-black">
          ატვირთეთ ფოტო
        </span>

        <div className="w-[600px] h-[180px] rounded-xl border border-dashed border-light-grey bg-lightest-grey flex flex-col items-center justify-center gap-[24px]">
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
            <Input placeholder="შეიყვნეთ ავტორი" label="ავტორი *" />
          </div>
          <div className="flex flex-col items-start">
            <Input placeholder="შეიყვნეთ სათაური" label="სათური *" />
          </div>
        </div>
        <div className="mb-[24px]">
          <span className="text-black text-[14px] not-italic leading-5 font-medium">
            აღწერა *
          </span>
          <Input placeholder="შეიყვნეთ აღწერა" />
        </div>
        <div className="flex gap-[24px] flex-wrap">
          <div>
            <Input type="date" label="გამოქვეყნების თარიღი *" />
          </div>
          <div>
            <Input type="text" label="კატეგორია *" />
          </div>
          <div>
            <Input
              type="email"
              label="ელ-ფოსტა"
              placeholder="Example@redberry.ge"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-[40px]">
        <Button title="გამოქვეყნება" />
      </div>
    </div>
  );
}
