import PropTypes from "prop-types";
import styles from "./Definition.module.css";
/*
 I decided to leave this as a single component vs creating DefinitionItem, PartOfSpeech, Synonyms, and Antonyms components.
 I will look into making these changes when I refactor this app
*/
export default function Definition({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}) {
  // calculate a dynamic width for the line-divider so that it renders based on the length of the word in partOfSpeech
  const dynamicWidth = `calc((100% - ${partOfSpeech.length / 1.5}rem) * .95)`;
  return (
    <>
      <div className={styles["definition"]}>
        <div className={styles["speech-part-container"]}>
          <h3>{partOfSpeech}</h3>
          <div
            style={{ width: dynamicWidth }}
            className={styles["line-divider"]}
          ></div>
        </div>
        <p>Meaning</p>
        <ul>
          {definitions.map((definitionData) => {
            return (
              <li key={Math.random()}>
                <span className={styles["definition-span"]}>
                  {definitionData.definition}
                  {definitionData.example && (
                    <p className={styles["definition-example"]}>
                      &quot;{definitionData.example}&quot;
                    </p>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
        {synonyms[0] && (
          <div>
            <p>Synonyms</p>

            <div className={styles["synonyms-antonyms"]}>
              {synonyms.length > 1
                ? synonyms.map((synonym) => {
                    return ` ${synonym} `;
                  })
                : synonyms[0]}
            </div>
          </div>
        )}
        {antonyms[0] && (
          <div className={styles["synonyms-antonyms"]}>
            <p>Antonyms</p>

            <div>
              {antonyms.length > 1
                ? antonyms.map((antonym) => {
                    return `${antonym} `;
                  })
                : antonyms[0]}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Definition.propTypes = {
  partOfSpeech: PropTypes.string,
  definitions: PropTypes.array,
  synonyms: PropTypes.array,
  antonyms: PropTypes.array,
};
