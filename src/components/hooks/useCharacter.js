import { useState } from "react";
import { getDetailCharacter } from "../../htttp/getDetailCharacter";

export const useCharacter = async (url) => {
  const [character, setCharacter] = useState(null);

  try {
    const characterResponse = await getDetailCharacter(url)
    setCharacter(characterResponse);
  } catch (error) {
    console.log(error);
  }

  return {
    character,
  };
};
