<script setup lang="ts">
import Banner from '../components/Banner.vue'

</script>
<template>
  <main>
    <div>
      <div class="about container">
        <h1>Overview</h1>
      </div>
      <div class="container">
        <Banner>
          <template #image>
            <img  src="../assets/images/SKIPP-Banner.png"  class="container"/>
          </template>
        </Banner>
        <div class="overview-content">
          <p>
            In October of 2018, when University of Alberta-led research about the role of exercise during pregnancy hit the news, a call-in show on CBC radio discussed the researchers’ recommendations. One caller identified herself as a young Indigenous woman and requested an intersectional lens on the findings. If I remember correctly, she described herself as a mother and foster parent to a disabled child. She found the recommended 150 minutes of weekly physical exercise to reduce pregnancy risks out of reach for her and others due to gender-based responsibilities for childrearing, little to no respite while raising a disabled kid, limited disposable income for a gym membership, and inadequate access to public transit.
          </p>
        </div>
      </div>
      <div class="vision-mission-background">
          <div class="container">
            <div class="row">
              <div class="col-md-4 vision-misson-header">
                VISION
                AND
                MISSION
              </div>
              <div class="col-md-8 vision-misson-content" style="padding-left: 60px;">
                As a university-wide signature area of research and teaching we are charged with promoting existing and enhancing intersectional gender research on campus. While some scholars have been rightly sceptical about the mainstreaming of intersectionality, there is also a great cost to not mainstreaming intersectional-type gender research across the Faculties.
                <br>
                <br>
                As a signature area we promote an understanding that nearly all research needs to be intersectional to be successful. Thus we embrace the promise of mainstreaming intersectionality across diverse Faculties and disciplines, whilst remaining alert to the challenges of doing so

              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 director-image-block">
              <img  src="../assets/images/director.jpg"  class="director-image"/>
            </div>
            <div class="col-md-8">
              <div class="director-name">Susanne Luhmann</div>
              
              <div class="director-title">Director, Intersections of Gender</div>
            </div>
          </div>
          <div class="director-content">
            Dr. Susanne Luhmann is Director of Intersections of Gender, as well as an Associate Professor and former Chair in the Department of Women’s and Gender Studies. Susanne was one of four Principal Investigators on the same-named KIAS-funded project, and was recognized along with this team as AWA Women of the Year in 2018. Susanne has research interests that traverse a number of topics and fields, including trauma and cultural memory, queer and feminist pedagogy, sexuality studies, and the (ongoing) formation of academic Women’s and Gender Studies. Susanne’s guiding philosophy in shaping Intersections of Gender is to work towards a signature area that the University of Alberta and wider communities envision.
          </div>
        </div>
    </div>
  </main>
  
</template>

<style>
.director-name{
  padding-top: 150px;
  font-size: 40px;
  font-weight: 500;
  line-height: 58px;
  color: #327D49;
}
.director-title{
  line-height: 20px;
  font-size: 32px;
  color: #327D49;
  font-weight: 400;
}
.director-content{
  font-size: 20px;
  line-height: 35px;
  font-weight: 400;
  text-align: justify;
}
.director-image{
  border-radius: 50%;
}
.director-image-block{
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 100px;
}
</style>
