import SelectDropdown from "react-native-select-dropdown";

function DropDownTranslate({languages}) {
  return (
    <SelectDropdown
      data={languages}
      buttonTextAfterSelection={(selectedItem) => {
        return selectedItem.name;
      }}
      rowTextForSelection={(item) => {
        return item.name;
      }}
      onSelect={(item) => {
        setTarget(item.language);
      }}
      search={true}
    />
  );
}

export default DropDownTranslate