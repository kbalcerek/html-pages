<template>
    <div class="container">
        <main>
            <article>
                <h1>
                    <span>Forum</span>
                </h1>

                <h3>Forum</h3>

                <p>
                    For discussions etc., please use the group's Google Plus community at
                    <a href="https://plus.google.com/communities/104510681993581444051">
                        https://plus.google.com/communities/104510681993581444051
                    </a>.
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
        name: 'forum',
        components: {},
        methods: {
            outboundClick,
            outboundLinkClick,
        },
    };
</script>

<style lang="scss" scoped>

</style>