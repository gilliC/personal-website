import React from "react";
import { t } from "services/translation/translate";
import { JobTitle } from "./components/jobTitle";
import { NameTitle } from "./components/nameTitle";
export const Titles = () => {
  return (
    <div>
        <NameTitle />
        <JobTitle />
    </div>
  );
};
