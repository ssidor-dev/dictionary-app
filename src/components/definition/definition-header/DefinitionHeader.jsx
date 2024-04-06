import PropTypes from "prop-types";
import styles from "./DefinitionHeader.module.css";
import DefinitionAudio from "./DefinitionAudio";


/*
 the DefinitionHeader components takes in props word, phonetics, and phonetic
 and returns the word, phonetic (depending if the phonetic for the word is in the phonetic position or in the phonetic position inside the array phonetics),
 and  the DefinitionAudio component (which displays the play button and the word audio if available... see DefinitionAudio components for more detail)
*/

export default function DefinitionHeader({ word, phonetics, phonetic }) {
  const filterPhonetics = phonetics.filter((audioData) => {
    return audioData.audio.length > 0;
  });

  return (
    <div className={styles["definition-header"]}>
      <div>
        <h1>{word}</h1>
        <p>
          {phonetic
            ? phonetic
            : filterPhonetics[0]?.text
            ? filterPhonetics[0].text
            : filterPhonetics[1]?.text}
        </p>
      </div>
      {filterPhonetics[0] && <DefinitionAudio audioData={filterPhonetics} />}
    </div>
  );
}

DefinitionHeader.propTypes = {
  word: PropTypes.string,
  phonetics: PropTypes.array,
  phonetic: PropTypes.string,
};
