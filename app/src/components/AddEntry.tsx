"use client";

import Modal from "./Modal";
import { useState } from "react";

export function AddEntry() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Modal />
    </div>
  );
}
