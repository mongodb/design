import { KnobRow } from "./KnobRow";
import { KnobProps } from "./types";

interface Knobs {
  props: KnobProps;
  updateKnobValue: (prop: string, val: any) => void;
}

export const Knobs = ({ props, updateKnobValue }: Knobs) => {
  let propsArr: { name: string; [key: string]: any }[] = [];

  // convert object to an array of objects
  for (let key in props) {
    if (props.hasOwnProperty(key)) {
      const prop = {
        ...props[key],
        name: key,
      };
      propsArr.push(prop);
    }
  }

  return (
    <div>
      {propsArr.map((knob) => {
        return (
          <KnobRow
            key={knob.name}
            knob={knob}
            knobValue={knob.value ?? undefined}
            setKnobValue={updateKnobValue}
          />
        );
      })}
    </div>
  );
};
