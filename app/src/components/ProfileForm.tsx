"use client";

import { updateOneUser } from "@/lib/user";
import * as Form from "@radix-ui/react-form";

type Params = {
  id: number;
  email: string;
  name: string;
};

export function ProfileForm({ id, email, name }: Params) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { email, name } = Object.fromEntries(new FormData(e.currentTarget));
    console.log(email);
    console.log(name);
    updateOneUser(id, {
      email: String(email),
      name: String(name),
    });
  };

  return (
    <Form.Root className="w-[500px] mx-auto" onSubmit={handleSubmit}>
      <Form.Field className="grid mb-[10px]" name="name">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-grey">
            Name
          </Form.Label>
          <Form.Message
            className="text-[13px] text-grey opacity-[0.8]"
            match="valueMissing"
          >
            Please enter your name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-grey shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-grey selection:bg-blackA9 resize-none"
            required
            defaultValue={name}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-grey">
            Email
          </Form.Label>
          <Form.Message
            className="text-[13px] text-grey opacity-[0.8]"
            match="valueMissing"
          >
            Please enter your email
          </Form.Message>
          <Form.Message
            className="text-[13px] text-grey opacity-[0.8]"
            match="typeMismatch"
          >
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-grey shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-grey selection:bg-blackA9"
            type="email"
            required
            defaultValue={email}
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="box-border w-full text-grey hover:bg-slate-100 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_0_0_1px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Save change
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
