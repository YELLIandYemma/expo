<template>
  <Navbar />
  <div class="container mx-auto px-4 py-8 translate-y-[20%]">
    <h1 class="text-3xl font-bold mb-8">Our Founders</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="founder-card">
        <img
          src="../public/images/shreyas.jpg"
          alt="Arun Shreyas"
          class="rounded-full w-32 h-32 mb-4 object-cover border-4 border-white"
        />
        <p class="text-lg font-semibold text-center">
          Hello, I'm Arun Shreyas, also known as Shreyas, and I proudly serve as
          the founder of Grape. Currently, I'm a student in the 8th grade,
          balancing my academic pursuits with my hobbies, which include playing
          cricket and working on frontend projects. With unwavering
          determination, I firmly believe that Grape is destined for remarkable
          success and will soar to great heights in the future.
        </p>
      </div>
      <div class="founder-card">
        <img
          src="../public/images/vedesh.jpg"
          alt="Vedesh"
          class="rounded-full w-32 h-32 mb-4 object-cover border-4 border-white"
        />
        <p class="text-lg font-semibold text-center">
          Hello, I'm Vedesh, aged 12, serving as the Co-Founder and 3D Lead at
          Grape. With a fervent ambition for our startup to become a household
          name someday, I've been deeply immersed in coding, developing, and
          designing since the age of 8. I possess a clear vision of where Grape
          will stand in four years' time. As we continue to innovate and evolve,
          I am confident in our trajectory towards success.
        </p>
      </div>
      <div class="founder-card">
        <img
          src="../public/images/inian.jpg"
          alt="Inian"
          class="rounded-full w-32 h-32 mb-4 object-cover border-4 border-white"
        />
        <p class="text-lg font-semibold text-center">
          Hello, my name is Inian, I'm 13 years old, currently in 8th grade, and
          I'm passionate about technology and innovation. Alongside playing
          football and completing homework, I hold the role of CEO at Grape,
          where I spearhead our team's efforts in creating cutting-edge
          technology solutions. Notably, I've contributed as the designer of the
          G-Phones, leveraging my passion for both technology and design to
          craft innovative devices that blend style and functionality. With
          Grape, I'm excited to push the boundaries of innovation and shape the
          future of technology.
        </p>
      </div>
    </div>

    <!-- Certificate Section -->
    <div class="mt-12 flex justify-center">
      <div class="certificate">
        <img
          src="../public/images/prize.png"
          alt="Certificate"
          class="w-full h-auto"
        />
        <br />
        <br />
      </div>
      <div class="translate-y-[100%] translate-x-[-130%]">
        <h1 class="text-3xl font-bold mb-8">Thanks to:</h1>
        <p class="text-lg font-semibold text-center">
          Shamuga Priya Mam (ICT Teacher) <br />
          and <a>Pnc Cognitio School</a>
        </p>
      </div>
    </div>
  </div>
  <br />
  <br />
</template>

<script>
export default {
  // No dynamic data or props required for this static approach
};
</script>

<style scoped>
.founder-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.founder-card:hover {
  transform: translateY(-5px);
}

.founder-card img {
  width: 120px; /* Set a fixed width */
  height: 120px; /* Set a fixed height */
  border: 4px solid #ffffff;
}

.founder-card p {
  color: #333333;
}

.certificate {
  max-width: 600px;
}
</style>
