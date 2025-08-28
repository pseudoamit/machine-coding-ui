import { useState } from "react";
import Interest from "./interest";
import Profile from "./profile";
import Settings from "./settings";

export default function MultiForm() {
  const tabs = ["profile", "interest", "settings"];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [formData, setFormData] = useState({
    profile: {
      age: { name: "age", value: null, error: { isError: false, message: "" } },
      email: {
        name: "email",
        value: null,
        error: { isError: false, message: "" },
      },
    },
    interest: {
      hobbies: {
        label: "hobbies",
        type: "checkbox",
        options: [
          { id: 1, name: "cricket" },
          { id: 2, name: "footbal" },
          { id: 3, name: "cooking" },
          { id: 4, name: "fishing" },
        ],
      },
      language: {
        label: "language",
        type: "radio",
        options: [
          { id: 1, name: "English" },
          { id: 2, name: "Hindi" },
          { id: 3, name: "Spanish" },
          { id: 4, name: "Japanese" },
        ],
      },
    },
    settings: {
      newsLetter: {
        label: "newsLetter",
        options: [
          { id: 1, name: "Yes" },
          { id: 2, name: "No" },
        ],
        selectedNewsLetter: null,
      },
    },
  });

  const tabHandler = (e, selectedTab, index) => {
    setActiveTab(selectedTab);
    setActiveTabIndex(index);
  };

  const updateProfile = (value, type) => {
    setFormData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [type]: { ...prev.profile[type], value: value },
      },
    }));
  };

  const updateInterest = (isChecked, id, type) => {
    setFormData((prev) => ({
      ...prev,
      interest: {
        ...prev.interest,
        [type]: {
          ...prev.interest[type],
          options: prev.interest[type].options.map((option) => {
            if (option.id === id) {
              return {
                ...option,
                isSelected: isChecked,
              };
            }
            return option;
          }),
        },
      },
    }));
  };

  const updateSettings = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        newsLetter: {
          ...prev.settings.newsLetter,
          selectedNewsLetter: selectedOption,
        },
      },
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateTab("settings")) {
      console.log("✅ Form Submitted", formData);
    } else {
      console.log("❌ Validation failed");
    }
  };

  const handlePrev = () => {
    setActiveTabIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (validateTab(activeTab)) {
      setActiveTabIndex((prev) => prev + 1);
      setActiveTab(tabs[activeTabIndex + 1]);
    }
  };

  const validateTab = (tabName) => {
    let isValid = true;
    let newFormData = { ...formData };

    if (tabName === "profile") {
      const age = newFormData.profile.age.value;
      if (!age || isNaN(age)) {
        newFormData.profile.age.error = {
          isError: true,
          message: "Age must be numeric",
        };
        isValid = false;
      } else {
        newFormData.profile.age.error = { isError: false, message: "" };
      }

      const email = newFormData.profile.email.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        newFormData.profile.email.error = {
          isError: true,
          message: "Enter a valid email",
        };
        isValid = false;
      } else {
        newFormData.profile.email.error = { isError: false, message: "" };
      }
    }

    if (tabName === "interest") {
      const hobbiesSelected = newFormData.interest.hobbies.options.some(
        (opt) => opt.isSelected
      );
      if (!hobbiesSelected) {
        newFormData.interest.hobbies.error = {
          isError: true,
          message: "Select at least one hobby",
        };
        isValid = false;
      } else {
        newFormData.interest.hobbies.error = { isError: false, message: "" };
      }

      const languageSelected = newFormData.interest.language.options.some(
        (opt) => opt.isSelected
      );
      if (!languageSelected) {
        newFormData.interest.language.error = {
          isError: true,
          message: "Select a language",
        };
        isValid = false;
      } else {
        newFormData.interest.language.error = { isError: false, message: "" };
      }
    }

    if (tabName === "settings") {
      if (!newFormData.settings.newsLetter.selectedNewsLetter) {
        newFormData.settings.newsLetter.error = {
          isError: true,
          message: "Please select a newsletter option",
        };
        isValid = false;
      } else {
        newFormData.settings.newsLetter.error = {
          isError: false,
          message: "",
        };
      }
    }

    setFormData(newFormData);
    return isValid;
  };

  return (
    <>
      <div>
        {tabs &&
          tabs?.map((tab, index) => (
            <button onClick={(e) => tabHandler(e, tab, index)}>{tab}</button>
          ))}
      </div>

      <form onSubmit={handleFormSubmit}>
        <div
          style={{
            margin: "3rem 2rem",
            border: "1px solid black",
            padding: "1rem 1rem",
          }}
        >
          {activeTabIndex === 0 && (
            <Profile
              profileData={formData.profile}
              updateProfile={updateProfile}
            />
          )}
          {activeTabIndex === 1 && (
            <Interest
              interestData={formData.interest}
              updateInterest={updateInterest}
            />
          )}
          {activeTabIndex === 2 && (
            <Settings
              settingsData={formData.settings.newsLetter}
              updateSettings={updateSettings}
            />
          )}
        </div>
        {activeTabIndex > 0 && <button onClick={handlePrev}>Prev</button>}
        {activeTabIndex >= 0 && activeTabIndex < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {activeTab === "settings" && <button type="submit">Submit</button>}
      </form>
    </>
  );
}
