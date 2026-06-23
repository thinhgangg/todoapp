import {
  Combobox,
  ComboboxTrigger,
  ComboboxValue,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";
import { options } from "@/lib/data";

const DateTimeFilter = ({ dateQuery, setDateQuery }) => {
  const selectedOption = options.find((option) => option.value === dateQuery);

  return (
    <Combobox value={dateQuery} onValueChange={setDateQuery}>
      <ComboboxTrigger className="flex h-9 min-w-36 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm cursor-pointer">
        <ComboboxValue>
          {selectedOption?.label ?? "Select time range..."}
        </ComboboxValue>
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxList>
          {options.map((option) => (
            <ComboboxItem
              key={option.value}
              value={option.value}
              label={option.label}
              className="cursor-pointer"
            >
              {option.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default DateTimeFilter;
