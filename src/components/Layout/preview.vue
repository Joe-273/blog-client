<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed repudiandae nobis voluptatum numquam,
          tempore deleniti soluta molestiae quasi facilis magni quidem corrupti magnam nemo reiciendis
          provident totam quam. Facilis, alias. Cumque veritatis labore error reiciendis architecto fuga
          laudantium facere. Asperiores laboriosam repellat nulla. Impedit, laboriosam suscipit? Repellendus
          sed architecto veritatis excepturi neque cum, quaerat officiis vero laborum placeat suscipit
          consequatur. Earum excepturi ex optio natus molestiae iusto ad quasi labore id officiis corporis est
          dolorum commodi dolorem molestias reprehenderit, maiores, modi cupiditate! Modi fugiat
          necessitatibus iure cupiditate, laborum ea voluptatum. Atque labore dignissimos quas mollitia
          doloribus inventore aliquid dolore hic minima molestias culpa qui explicabo, commodi corporis
          impedit corrupti est quidem natus fugit voluptatum magni? Velit qui dignissimos beatae error?
          Facilis iusto harum, consequuntur assumenda ad, est rem, omnis dolor esse a laborum adipisci quidem.
          Placeat accusantium, quisquam nobis dicta iure voluptas, dolores eligendi porro nihil repudiandae
          aliquam in! Illo.
        </div>
      </template>

      <template>
        <div class="main">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis et mollitia, deserunt
          consequuntur quia aut a architecto quidem ipsa numquam at libero sapiente quos? Repellendus amet
          impedit perspiciatis pariatur officia. Nisi ut, minima id earum aliquam vitae aliquid vero
          consequuntur voluptate consequatur. Nobis quibusdam nemo beatae quaerat, nulla natus? Eligendi quia
          veniam porro hic earum, impedit odio recusandae modi cumque! Voluptas, repudiandae aliquam commodi
          nisi molestias repellendus error voluptatibus id eius harum est distinctio non aut, nesciunt illo
          ducimus porro saepe nulla culpa quae odio dignissimos placeat tenetur? Culpa, inventore. Nulla fuga
          voluptate cupiditate veritatis molestiae eius, est eveniet esse asperiores praesentium nesciunt
          illum expedita, velit ad cumque. Fuga magni odit laudantium quasi ad consequuntur possimus repellat
          cupiditate neque voluptatum? Ex dolorem magnam fugit numquam. Dolorum dignissimos quam porro fuga,
          aspernatur laboriosam earum eum quasi repellendus beatae recusandae, consequatur quae! Quasi
          cupiditate voluptates libero aut? Earum eum consequatur hic dolores!
        </div>
      </template>

      <template #right>
        <div class="right">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo iste, fugiat perferendis consequuntur
          repellat facere in a quos modi earum accusantium pariatur ratione reprehenderit placeat quis
          molestias dicta. Incidunt, temporibus.
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import '@/styles/global.less'
import Layout from './'
export default {
  components: {
    Layout,
  },
}
</script>

<style lang="less" scoped>
.test-container {
  height: 900px;
  width: 100%;
  .left {
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    // background-color: lightblue;
  }
  .main {
    flex: 1 1 auto;
    width: 100%;
    height: 100%;

    // background-color: lightcoral;
  }
  .right {
    flex: 0 0 auto;
    width: 100%;
    height: 100%;

    // background-color: lightgreen;
  }
}
</style>
