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
  <p class="my-6 text-center text-2xl antialiased font-light tracking-widest">Contact Me</p>
  <div class="flex justify-center text-base antialiased font-light tracking-widest">
    <div class="w-5/12 border border-2 rounded p-4">
      <form class="flex flex-col">
        <p class="p-2">Your Name</p>
        <input class="p-2 my-2 rounded" type="text" id="name" placeholder="Your Name" required>
        <p class="p-2">Email Address</p>
        <input class="p-2 my-2 rounded" type="email" id="email" placeholder="Your Email" required>
        <p class="p-2">Message</p>
        <textarea class="p-2 my-2 rounded" id="message" rows="4" placeholder="Your Message"></textarea>
        <button class="p-2 my-2 border border-2 rounded" type="submit">Send!</button>
      </form>
    </div>
  </div>
</template>