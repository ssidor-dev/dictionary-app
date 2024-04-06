import PropTypes from "prop-types";
import styles from "./DefinitionAudio.module.css";

export default function DefinitionAudio({ audioData }) {
  //test words cry, food, super, tea, and cup

  /*
 the audioFilter function takes in a filteredArray and filters this array down based on the country the audio is from.
 Since this API does not return a consistent audio URL for each word and I wanted the US word first, Canadian word 2nd, and UK word last.
 If the word the user searches for does not have a us.mp3, ca.mp3, or uk.mp3 then it returns the first audio index of the filtered array.
 This filteredArray is passed in from the DefinitionHeader parent component as the value audioData which is the filtered phonetics array.

*/
  function audioFilter(filteredArr) {
    const usAudio = filteredArr.filter((data) => {
      return data.audio.match("us.mp3");
    });
    const caAudio = filteredArr.filter((data) => {
      return data.audio.match("ca.mp3");
    });
    const ukAudio = filteredArr.filter((data) => {
      return data.audio.match("uk.mp3");
    });

    if (usAudio[0]) {
      return usAudio[0].audio;
    }
    if (caAudio[0]) {
      return caAudio[0].audio;
    }
    if (ukAudio[0]) {
      return ukAudio[0].audio;
    }

    return filteredArr[0]?.audio;
  }

  //initialize a new Audio object and handle play button clicks with the .play() method
  const audioDef = new Audio(audioFilter(audioData));

  function handlePlayAudio() {
    audioDef.play();
  }

  return (
    <button className={styles["btn-audio"]} onClick={handlePlayAudio}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
      >
        <g fill="#A445ED" fillRule="evenodd">
          <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
          <path d="M29 27v21l21-10.5z" />
        </g>
      </svg>
    </button>
  );
}

DefinitionAudio.propTypes = {
  audioData: PropTypes.array,
};
