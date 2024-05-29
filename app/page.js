import { EmbeddedTweet } from "react-tweet";

// Example data for required fields
const exampleUser = {
  id_str: "12345",
  name: "luz",
  screen_name: "luzalbaposse",
  profile_image_url_https:
    "https://pbs.twimg.com/profile_images/1764601709160968192/bGbgng7p_400x400.jpg",
  // Other properties of TweetUser
};

const exampleEntities = {
  hashtags: [
    {
      text: "Milei2023",
      indices: [34, 44],
    },
  ],
  symbols: [],
  user_mentions: [
    {
      screen_name: "JMilei",
      name: "Javier Milei",
      id_str: "4020276615",
      indices: [45, 53],
    },
  ],
  urls: [],
  // Other properties of TweetEntities
};

const exampleEditControl = {
  // Properties of TweetEditControl
};

const exampleIndices = [0, 100];

const newTweet = {
  __typename: "Tweet",
  lang: "en",
  created_at: new Date().toISOString(),
  display_text_range: exampleIndices,
  entities: exampleEntities,
  id_str: "67890",
  text: "Milei is the best president ever! #Milei2023 \n@JMilei keep it up!",
  user: exampleUser,
  edit_control: exampleEditControl,
  isEdited: false,
  isStaleEdit: false,
  favorite_count: 10,
  conversation_count: 5,
  news_action_type: "conversation",
  // Optional properties
  mediaDetails: [],
  photos: [],
  video: undefined,
  quoted_tweet: undefined,
  in_reply_to_screen_name: undefined,
  in_reply_to_status_id_str: undefined,
  in_reply_to_user_id_str: undefined,
  parent: undefined,
  possibly_sensitive: false,
};

// console.log(newTweet);

export default function Home() {
  return (
    <div>
      <EmbeddedTweet tweet={newTweet} />
    </div>
  );
}
