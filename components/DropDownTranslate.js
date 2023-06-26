import SelectDropdown from "react-native-select-dropdown";

function DropDownTranslate({ languages, setTarget }) {
  return (
    <SelectDropdown
      label={'123'}
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

export default DropDownTranslate;
