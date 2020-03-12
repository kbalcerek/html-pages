<template>
    <div class="container">
        <main>
            <article>
                <h1>
                    <span>Deliverables</span>
                </h1>

                <h3>Deliverables </h3>


                <table class="table table-hover">
                    <tbody>
                        <tr>
                            <th>Number</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Link (if available)</th>
                        </tr>
                        <tr>
                            <td><strong>D01</strong></td>
                            <td>GAO Core: A schema.org-compliant fundamental ontology for vehicle information in e-commerce</td>
                            <td>Ongoing</td>
                            <td><a href="https://www.w3.org/wiki/WebSchemas/Vehicles">W3C Wiki</a></td>
                        </tr>
                        <tr>
                            <td><strong>D02</strong></td>
                            <td>GAO Compatibility: A schema.org-compliant ontology for vehicle configuration information.</td>
                            <td>Planned</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td><strong>D03</strong></td>
                            <td>GAO Vehicle Lifetime Information: A schema.org-compliant ontology for vehicle life-time information.</td>
                            <td>Planned</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td><strong>D04</strong></td>
                            <td>GAO Vehicle Data Backbone: An ontology for information interchange within a vehicle, between vehicles, and between vehicles and their external entities.</td>
                            <td>Planned</td>
                            <td>N/A</td>
                        </tr>
                    </tbody>
                </table>
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
        name: 'deliverables ',
        components: {},
        methods: {
            outboundClick,
            outboundLinkClick,
        },
    };
</script>

<style lang="scss" scoped>

</style>