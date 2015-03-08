<?php
  /* Send an SMS using Twilio. You can run this file 3 different ways:
   *
   * - Save it as sendnotifications.php and at the command line, run 
   *        php sendnotifications.php
   *
   * - Upload it to a web host and load mywebhost.com/sendnotifications.php 
   *   in a web browser.
   * - Download a local server like WAMP, MAMP or XAMPP. Point the web root 
   *   directory to the folder containing this file, and load 
   *   localhost:8888/sendnotifications.php in a web browser.
   */
  // Include the PHP Twilio library. You need to download the library from 
  // twilio.com/docs/libraries, and move it into the folder containing this 
  // file.
  require "Services/Twilio.php";
  
  // Set our AccountSid and AuthToken from twilio.com/user/account
  $AccountSid = "ACae316fac018bbadcdfef6bce6eea7e40";
  $AuthToken = "264541c0f23357675d11ea26bdcc707a";

  // Instantiate a new Twilio Rest Client
  $client = new Services_Twilio($AccountSid, $AuthToken);

  /* Your Twilio Number or Outgoing Caller ID */
  $from = '6314173161';

  // make an associative array of server admins. Feel free to change/add your 
  // own phone number and name here.
  $people = array(
    "9086357678" => "Amol",
  );

  // Iterate over all admins in the $people array. $to is the phone number, 
  // $name is the user's name
  foreach ($people as $to => $name) {
    // Send a new outgoing SMS */
    $body = "This shit better work";
    $client->account->sms_messages->create($from, $to, $body);
    echo "Sent message to $name";
  }
?>