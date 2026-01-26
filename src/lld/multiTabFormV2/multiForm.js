import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Setting from "./Setting";

const tabs = ["profile", "interest", "setting"];

const MultiForm = () => {
  const [selectedTabs, setSelectedTabs] = useState(tabs[0]);
  const [formData, setFormData] = useState({
    profile: {
      name: {
        value: null,
        label: "name",
        type: "text",
        error: { isError: false, message: "" },
      },
      age: {
        value: null,
        label: "age",
        type: "number",
        error: { isError: false, message: "" },
      },
    },
    interest: {
      hobbies: {
        label: "hobbies",
        type: "checkbox",
        options: ["cricket", "singing", "dancing", "drawing", "swimming"],
        selectedValues: [],
        error: { isError: false, message: "" },
      },
      language: {
        label: "language",
        type: "radio",
        options: ["Hindi", "English", "Bengali"],
        selectedValues: "",
        error: { isError: false, message: "" },
      },
    },
    setting: {
      label: "newsLetter",
      options: ["Yes", "No"],
      selectedNewsLetter: "",
      type: "radio",
      error: { isError: false, message: "" },
    },
  });

  const changeTab = (tab) => {
    const isValid = validateForm(selectedTabs);

    if (isValid) {
      setSelectedTabs(tab);
    }
  };

  const updateProfile = (value, type) => {
    setFormData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [type]: {
          ...prev.profile[type],
          value: value,
        },
      },
    }));
  };

  const updateInterest = (value, type) => {
    setFormData((prev) => ({
      ...prev,
      interest: {
        ...prev.interest,
        [type]: {
          ...prev.interest[type],
          selectedValues: value,
        },
      },
    }));
  };

  const updateSettings = (value, type) => {
    setFormData((prev) => ({
      ...prev,
      setting: {
        ...prev.setting,
        selectedNewsLetter: value,
      },
    }));
  };

  const validateForm = (tabName) => {
    console.log("clicked tab", tabName);
    let isValid = true;
    let newFormData = { ...formData };
    if (tabName === "profile") {
      if (newFormData?.profile?.name?.value?.length < 6) {
        newFormData.profile.name.error = {
          isError: true,
          message: "Error in name field",
        };
        isValid = false;
      }
    } else if (tabName === "interest") {
      console.log(
        "===",
        newFormData?.interest?.hobbies?.selectedValues?.length,
      );
      if (newFormData?.interest?.hobbies?.selectedValues?.length === 0) {
        newFormData.interest.hobbies.error = {
          isError: true,
          message: "You must Select atleast one hobbie",
        };
        isValid = false;
      }
      if (newFormData?.interest?.language?.selectedValues?.length === 0) {
        newFormData.interest.language.error = {
          isError: true,
          message: "You must Select atleast one language",
        };
        isValid = false;
      }
    }

    console.log({ newFormData });

    setFormData(newFormData);

    return isValid;
  };

  const nextClickHandler = () => {
    const isValid = validateForm(selectedTabs);
    console.log({ isValid });

    if (!isValid) {
      return;
    } else {
      let index = tabs.indexOf(selectedTabs);
      setSelectedTabs(tabs[index + 1]);
    }
  };

  return (
    <>
      <h1>Form details</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        {tabs &&
          tabs?.map((tab) => (
            <button onClick={() => changeTab(tab)}>{tab}</button>
          ))}
      </div>
      {selectedTabs === "profile" && (
        <Profile data={formData?.profile} updateProfile={updateProfile} />
      )}
      {selectedTabs === "interest" && (
        <Interest data={formData?.interest} updateInterest={updateInterest} />
      )}
      {selectedTabs === "setting" && (
        <Setting data={formData?.setting} updateSettings={updateSettings} />
      )}

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        {selectedTabs !== "setting" && (
          <button onClick={nextClickHandler}>Next</button>
        )}
        {selectedTabs === "setting" && <button type="submit"> Submit</button>}
      </div>
    </>
  );
};

export default MultiForm;
