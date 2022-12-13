<script setup>
const sendEmail = () => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: 'them@website.com',
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body"
  }).then(
    message => alert(message)
  );
}
</script>

<template>
  <div class="container mx-auto">
    <h3>Contact Me!</h3>
    <form class="flex flex-col border border-round w-3/4">
      <input type="text" id="name" placeholder="Your Name" required>
      <input type="email" id="email" placeholder="Your Email" required>
      <textarea id="message" rows="4" placeholder="Your Message"></textarea>
      <button type="submit">Send!</button>
    </form>
  </div>
</template>