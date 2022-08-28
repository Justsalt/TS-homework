type StringifyObjectProps<Type extends Object> = {
  [Key in keyof Type]: string
};
const stringifyProps = <Type extends Object>(object: Type): StringifyObjectProps<Type> => {
  const objToArray = Object.entries(object);

  const objectWithPropsStringified = objToArray
    .reduce<Partial<StringifyObjectProps<Type>>>((prevObj, [key, value]) => ({
      ...prevObj,
      [key]: String(value),
    }), {});

  return objectWithPropsStringified as StringifyObjectProps<Type>;
};

export default stringifyProps;
