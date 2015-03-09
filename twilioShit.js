$AccountSid = "AC2727ce935aa207c8c9963dad66a39973";
$AuthToken = "5d4f231037c5b1a21bec1655a0c84660";

// Instantiate a new Twilio Rest Client
$client = new Services_Twilio($AccountSid, $AuthToken);

/* Your Twilio Number or Outgoing Caller ID */
$from = '6314173161';

// make an associative array of server admins. Feel free to change/add your
// own phone number and name here.
$people = array(
  "8152106069" => "Josh",
);

// Iterate over all admins in the $people array. $to is the phone number,
// $name is the user's name
foreach ($people as $to => $name) {
// Send a new outgoing SMS
  $body = "This shit better work";
  $client->account->sms_messages->create($from, $to, $body);
  echo "Sent message to $name";
}