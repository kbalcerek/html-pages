<template>
    <div class="container">
        <main>
            <article>
                <h1>
                    <span>What is FIBO</span>
                </h1>

                <h3>Breaking News: W3C Automotive Ontology Community Group</h3>

                <img src="../assets/img/aowg_logo.png" class="automotive-logo img-fluid" />

                <p>
                    On May 8, 2015, we founded a W3C Community Group. In the coming weeks, we will gradually migrate this
                    informal working group into that framework. This will provide a much more reliable legal and
                    organizational environment for our work. Stay tuned!
                </p>
                <br>
                
                <ul>
                    <li>
                        <a href="https://www.w3.org/community/gao/" v-on:click="outboundLinkClick('https://www.w3.org/community/gao/')">
                            W3C Automotive Ontology Community Group Web Site
                        </a>
                    </li> 
                    <li>Please join that new group. W3C membership is not required.</li>
                </ul>
                
                <div style="clear:both;"></div>
            </article>
        </main>
    </div>
</template>

<script>
    import helpers from '../store/helpers.js';
    import {
        outboundClick, outboundLinkClick
    }
    from '../helpers/ga';

    export default {
        extends: helpers,
        name: 'home',
        components: {},
        methods: {
            outboundClick,
            outboundLinkClick,
        },
    };
</script>

<style lang="scss" scoped>
.automotive-logo{
  border: 1px solid map-get($colors-map, 'medium-grey');
  float: left;
  width: 400px;
  padding: 20px;
  margin: 0 40px 40px 0;
}
</style>