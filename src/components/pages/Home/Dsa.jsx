import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Group } from '@components';
import '@styles/components/pages/Home/Dsa.scss';

const query = graphql`
    {
        data: allDsaJson {
            nodes {
                name
                secondary
                href
                content
                image {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                facebook
                email
                discord
                instagram
            }
        }
    }
`;

export const Dsa = () => {
    const { data } = useStaticQuery(query);
    return (
        <Container tag='section' block='dsa' className='home__section'>
            <h2 className='dsa__title'>Department Student Association (DSA)</h2>
            <ul className='dsa__groups'>
                { data.nodes.map((item, i) => <Group key={ i } item={ item }/>) }
            </ul>
        </Container>
    )
}