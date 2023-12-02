<template>
  <main>
    <h1>HELLO MODERFOKERS</h1>
    <br />
    <hr />
    <br />

    <form action="/" enctype="multipart/form-data">
      <input type="file" ref="file" @change="onFileSelected" id="" />
      <br />
      <br />
      <button type="submit" @click.prevent="uploadImage">Upload!</button>
    </form>

    <br />
    <hr />
    <br />

    Data to upload : {{ file }}

    <br />
    <br />
    <hr />
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      file: null,
      message: "hello world",
    };
  },

  methods: {
    onFileSelected() {
      // this.file = event.target.files[0];
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },

    async uploadImage() {
      const formData = new FormData();
      formData.append("image", this.file);

      console.log(formData);

      try {
        await axios
          .post("http://localhost:5000/api/uploads", 
            formData,
          )
          .then((res) => console.log(res));
      } catch (error) {
        console.log(error);
        console.log("CLIENT SIDE POST REQUEST ERROR!");
      }
    },
  },
};
</script>