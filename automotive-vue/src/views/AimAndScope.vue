<template>
    <div class="container">
        <main>
            <article>
                <h1>
                    <span>Aim And Scope</span>
                </h1>

                <h3>Aim And Scope</h3>

                <p class="text">
                    The Automotive Ontology Working Group is an informal group of individuals and corporations who
                    want to advance the use of shared conceptual structures in the form of Web ontologies for better
                    data interoperability in the automotive industry, and this at Web scale. In particular, we want to
                    develop
                </p>
                <ul>
                    <li>
                        extension proposals for schema.org so that automotive information can be better understood by
                        search engines and
                    </li> 
                    <li>OWL Web ontologies for the automotive industry.</li>
                </ul>
                
                <p>
                    Also, we want to provide a forum for bringing together researchers and practitioners who are
                    working on advancing the field.
                </p>

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
        name: 'aimAndScope',
        components: {},
        methods: {
            outboundClick,
            outboundLinkClick,
        },
    };
</script>

<style lang="scss" scoped>

</style>