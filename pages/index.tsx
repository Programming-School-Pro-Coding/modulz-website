import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Heading, Text, Divider, Card, Grid, Flex, Link } from '@modulz/radix';
import { learnPosts } from '../utils/learnPosts';
import { blogPosts } from '../utils/blogPosts';
import { FrontMatter } from '../types';
import { BlogCard } from '../components/BlogCard';
import { BlogCardGrid } from '../components/BlogCardGrid';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { MarketingButton } from '../components/MarketingButtton';
import { Logo } from '../components/Logo';

const Home = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Box mt={6} mb={8}>
        <Container size={2}>
          <Heading size={5} mb={3} sx={{ textAlign: 'center', fontWeight: 500 }}>
            The No-Code DSM
          </Heading>
          <Heading as="h2" px="4" size={2} weight="normal" sx={{ textAlign: 'center', color: 'gray700', lineHeight: '4' }}>
            Define tokens, style components, document your design system and deploy your React library—without writing code.
          </Heading>
          <Flex mt={7} sx={{ justifyContent: 'center' }}>
            <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" target="_blank">
              Apply for beta access
              <Box as="span" ml={2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M5.5 3.5L11.5 3.5L11.5 9.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Box>
            </MarketingButton>
          </Flex>
          <Flex mt={4} sx={{ justifyContent: 'center' }}>
            <Text size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '1' }}>
              We're currently in private beta.
            </Text>
          </Flex>
        </Container>
      </Box>

      <Container size={3}>
        <Box my={8} pb={8}>
          <img
            src="/home/editor.png"
            style={{
              display: 'block',
              maxWidth: '100%',
              boxShadow:
                'hsla(208, 28%, 12%, 0.42) 0px 60px 123px -25px, hsla(208, 25%, 10%, 0.08) 0px 35px 75px -35px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'hsl(208, 18%, 86%) hsl(208, 18%, 86%) hsl(210, 16%, 76%)',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Container>

      <Box py={8}>
        <Container size={2}>
          <Heading as="h3" size={4} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
            Design, develop, document and deploy your design system—without writing code.
          </Heading>
          <Text as="p" size={5} mb={7} sx={{ textAlign: 'center', color: 'gray700' }}>
            A central hub for your design system.
          </Text>
        </Container>
        <Container size={3}>
          <Grid sx={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            <Box>
              <Heading as="h3" size={2} mb={4} sx={{ fontWeight: 500 }}>
                Define your tokens
              </Heading>
              <Text as="p" size={3}>
                From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create, test and iterate.
              </Text>
              <Box mt="5">
                <Text as="span" size={3} style={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="highlight" sx={{ ':focus': { boxShadow: 'none' } }}>
                      Learn about tokens
                    </Link>
                  </NextLink>
                </Text>
              </Box>
            </Box>
            <Box>
              <Heading as="h3" size={1} mb={4} sx={{ fontWeight: 500 }}>
                Design your components
              </Heading>
              <Text as="p" size={3}>
                From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create, test and iterate.
              </Text>
              <Box mt="5">
                <Text as="span" size={3} style={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="highlight" sx={{ ':focus': { boxShadow: 'none' } }}>
                      Learn about tokens
                    </Link>
                  </NextLink>
                </Text>
              </Box>
            </Box>
            <Box>
              <Heading as="h3" size={1} mb={4} sx={{ fontWeight: 500 }}>
                Document your styleguide
              </Heading>
              <Text as="p" size={3}>
                From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create, test and iterate.
              </Text>
              <Box mt="5">
                <Text as="span" size={3} style={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="highlight" sx={{ ':focus': { boxShadow: 'none' } }}>
                      Learn about tokens
                    </Link>
                  </NextLink>
                </Text>
              </Box>
            </Box>
            <Box>
              <Heading as="h3" size={1} mb={4} sx={{ fontWeight: 500 }}>
                Deploy your design system
              </Heading>
              <Text as="p" size={3}>
                From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create, test and iterate.
              </Text>
              <Box mt="5">
                <Text as="span" size={3} style={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="highlight" sx={{ ':focus': { boxShadow: 'none' } }}>
                      Learn about tokens
                    </Link>
                  </NextLink>
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Box py={8}>
        <Container size={2}>
          <Text
            as="h3"
            size={2}
            mb={5}
            sx={{ fontWeight: 500, color: 'gray700', letterSpacing: '.125em', textAlign: 'center', textTransform: 'uppercase', lineHeight: '13px', }}
          >
            How it works
          </Text>
          <Heading as="h3" size={4} mb={8} sx={{ textAlign: 'center', fontWeight: 500 }}>
            Design, document and deploy your design system—without writing code.
          </Heading>
        </Container>
        <Container size={2}>
          <Grid sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, alignItems: 'center', justifyItems: 'center' }}>
            <Box>
              <Box sx={{ width: '150px', height: '150px', backgroundColor: 'pink' }}>
              </Box>
            </Box>
            <Box>
              <Heading as="h3" size={1} mb={4} sx={{ fontWeight: 500 }}>
                Define your tokens
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes.
              </Text>
              <Box mt="5">
                <Text as="span" size={3} style={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="highlight" sx={{ ':focus': { boxShadow: 'none' } }}>
                      Learn more
                    </Link>
                  </NextLink>
                </Text>
              </Box>
            </Box>
            <Box>
              <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" target="_blank">
                Apply for beta access
                <Box as="span" ml={2}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M5.5 3.5L11.5 3.5L11.5 9.5"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Box>
              </MarketingButton>
            </Box>
            <Box>
              <Heading as="h3" size={1} mb={4} sx={{ fontWeight: 500 }}>
                Design your components
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes.
              </Text>
              <Box mt="5">
                <Text as="span" size={3} style={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="highlight" sx={{ ':focus': { boxShadow: 'none' } }}>
                      Learn about tokens
                    </Link>
                  </NextLink>
                </Text>
              </Box>
            </Box>

            <Box>
            <Box sx={{ width: '150px', height: '150px', backgroundColor: 'pink' }}>
            </Box>
            </Box>
            <Box>
              <Heading as="h3" size={2} mb={4} sx={{ fontWeight: 500 }}>
                Document your design system
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes.
              </Text>
              <Box mt="5">
                <Text as="span" size={4} style={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="highlight" sx={{ ':focus': { boxShadow: 'none' } }}>
                      Learn about tokens
                    </Link>
                  </NextLink>
                </Text>
              </Box>
            </Box>

            <Box>
            <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" target="_blank">
              Apply for beta access
              <Box as="span" ml={2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M5.5 3.5L11.5 3.5L11.5 9.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Box>
            </MarketingButton>
            </Box>
            <Box>
              <Heading as="h3" size={2} mb={4} sx={{ fontWeight: 500 }}>
                Deploy your design system
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes.
              </Text>
              <Box mt="5">
                <Text as="span" size={4} style={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="highlight" sx={{ ':focus': { boxShadow: 'none' } }}>
                      Learn more
                    </Link>
                  </NextLink>
                </Text>
              </Box>
            </Box>

            <Box>
              <Box sx={{
                width: '6',
                height: '6',
                boxShadow: 'white 0px 0px 0px 80px, rgb(204, 231, 255) 0px 0px 0px 81px, rgb(245, 250, 255) 0px 0px 0px 160px, rgb(214, 236, 255) 0px 0px 0px 161px, white 0px 0px 0px 240px, rgb(214, 236, 255) 0px 0px 0px 241px, rgb(250, 253, 255) 0px 0px 0px 320px, rgb(224, 241, 255) 0px 0px 0px 321px, white 0px 0px 0px 400px',
                borderRadius: '50%',
                position: 'relative',
                zIndex: '-3',
              }}>
                <Logo />
              </Box>
            </Box>
            <Box>
              <Heading as="h3" size={2} mb={4} sx={{ fontWeight: 500 }}>
                Integrations
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes.
              </Text>
              <Box mt="5">
                <Text as="span" size={4} style={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="highlight" sx={{ ':focus': { boxShadow: 'none' } }}>
                      Learn more
                    </Link>
                  </NextLink>
                </Text>
              </Box>
            </Box>

          </Grid>
        </Container>
      </Box>

      <Box py={8}>
        <Container size={3}>
          <Text
            as="h3"
            size={2}
            mb={5}
            sx={{ fontWeight: 500, color: 'gray700', letterSpacing: '.125em', textAlign: 'center', textTransform: 'uppercase', lineHeight: '13px', }}
          >
            How it works
          </Text>
          <Heading as="h3" size={4} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
            Design in Modulz. Deploy everywhere.
          </Heading>
          <Text as="p" size={5} mb={7} sx={{ textAlign: 'center', color: 'gray700' }}>
            A central hub for your design system.
          </Text>
          <Text as="p" size={3} mb={7} sx={{ textAlign: 'center', color: 'gray700' }}>
            Define a complete set design tokens.
          </Text>
          <Text as="p" size={3} mb={7} sx={{ textAlign: 'center', color: 'gray700' }}>
            Modulz provides hundreds of pre-built components for you to customise.
          </Text>
        </Container>
        <Container size={3}>
          <Flex py="8" sx={{ justifyContent: 'center' }}>
            <Box as="p" size={4} sx={{ backgroundColor: 'blue100', py: '1', px: '2' }}>
              <Text as="p" size={0} weight="medium" sx={{ lineHeight: '1', textAlign: 'center', color: 'blue600', textTransform: 'uppercase', letterSpacing: '1.15px' }}>
                Design
              </Text>
            </Box>
          </Flex>
          <Grid sx={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 5 }}>
            <Card>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Icons
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '1' }}>
                Modulz generates a React icon component from your Figma or Sketch icons file.
              </Text>
            </Card>
            <Card>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Drawing tools
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '1' }}>
                Export your theme and component library to your favourite design tool.
              </Text>
            </Card>
            <Card>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Styleguide
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '1' }}>
                Learn how to make the most out of Modulz.
              </Text>
            </Card>
            <Card>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                NPM
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '1' }}>
                Learn how to make the most out of Modulz.
              </Text>
            </Card>
          </Grid>
          <Flex pt="8" pb="8" sx={{ justifyContent: 'center' }}>
            <Box as="p" size={4} sx={{ backgroundColor: 'blue100', py: '1', px: '2' }}>
              <Text as="p" size={0} weight="medium" sx={{ lineHeight: '1', textAlign: 'center', color: 'blue600', textTransform: 'uppercase', letterSpacing: '1.15px' }}>
                Document
              </Text>
            </Box>
          </Flex>
          <Grid sx={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 5 }}>
            <Card>
              <Box mb="3">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                  <path d="M35.4412 15.5671C35.4412 13.2516 32.5377 11.0573 28.086 9.69649C29.1133 5.16528 28.6567 1.56027 26.6449 0.406098C26.1811 0.135366 25.639 0.00712442 25.0468 0.00712442V1.59589C25.375 1.59589 25.639 1.66002 25.8601 1.78113C26.8304 2.33685 27.2513 4.45283 26.9231 7.1744C26.8446 7.84411 26.7162 8.54944 26.5593 9.26901C25.161 8.92704 23.6343 8.66343 22.0291 8.49244C21.066 7.1744 20.0672 5.97748 19.0613 4.93017C21.387 2.77144 23.5701 1.58877 25.054 1.58877V0C23.0921 0 20.5238 1.39641 17.927 3.81875C15.3301 1.41066 12.7619 0.0284982 10.8 0.0284982V1.61727C12.2767 1.61727 14.4669 2.79282 16.7926 4.9373C15.7939 5.98461 14.7951 7.1744 13.8463 8.49244C12.2339 8.66343 10.7072 8.92704 9.30895 9.27614C9.14487 8.56368 9.02359 7.87261 8.93798 7.21002C8.60267 4.48845 9.01645 2.37247 9.97956 1.80963C10.1936 1.68139 10.4718 1.62439 10.8 1.62439V0.0356226C10.2007 0.0356226 9.65852 0.163864 9.18767 0.434596C7.18298 1.58877 6.73353 5.18666 7.76798 9.70361C3.33056 11.0715 0.441238 13.2587 0.441238 15.5671C0.441238 17.8826 3.34483 20.0769 7.79652 21.4377C6.7692 25.9689 7.22579 29.5739 9.23761 30.7281C9.70133 30.9988 10.2435 31.1271 10.8428 31.1271C12.8047 31.1271 15.373 29.7307 17.9698 27.3083C20.5666 29.7164 23.1349 31.0986 25.0968 31.0986C25.696 31.0986 26.2382 30.9703 26.7091 30.6996C28.7138 29.5454 29.1632 25.9475 28.1288 21.4306C32.5519 20.0698 35.4412 17.8754 35.4412 15.5671ZM26.1526 10.815C25.8886 11.7341 25.5605 12.6817 25.1895 13.6292C24.897 13.0593 24.5902 12.4893 24.2549 11.9193C23.9268 11.3494 23.5772 10.7937 23.2276 10.2522C24.2407 10.4018 25.218 10.5871 26.1526 10.815ZM22.8852 18.4027C22.3287 19.3645 21.758 20.2764 21.1659 21.1242C20.1029 21.2168 19.0256 21.2667 17.9412 21.2667C16.864 21.2667 15.7867 21.2169 14.7309 21.1314C14.1388 20.2835 13.5609 19.3787 13.0044 18.424C12.4622 17.4907 11.97 16.5432 11.5205 15.5885C11.9628 14.6338 12.4622 13.6791 12.9973 12.7458C13.5538 11.784 14.1245 10.872 14.7166 10.0242C15.7796 9.93159 16.8569 9.88172 17.9412 9.88172C19.0185 9.88172 20.0957 9.93159 21.1516 10.0171C21.7437 10.8649 22.3216 11.7697 22.8781 12.7244C23.4202 13.6577 23.9125 14.6053 24.3619 15.56C23.9125 16.5147 23.4202 17.4693 22.8852 18.4027ZM25.1895 17.4765C25.5747 18.4312 25.9029 19.3858 26.174 20.312C25.2394 20.54 24.2549 20.7324 23.2348 20.882C23.5843 20.3334 23.9339 19.7706 24.2621 19.1935C24.5902 18.6235 24.897 18.0464 25.1895 17.4765ZM17.9555 25.0783C17.292 24.3944 16.6286 23.6321 15.9722 22.7985C16.6143 22.827 17.2706 22.8484 17.9341 22.8484C18.6047 22.8484 19.2682 22.8341 19.9174 22.7985C19.2753 23.6321 18.6118 24.3944 17.9555 25.0783ZM12.6477 20.882C11.6347 20.7324 10.6573 20.5471 9.72273 20.3192C9.98669 19.4001 10.3149 18.4525 10.6858 17.505C10.9783 18.0749 11.2851 18.6449 11.6204 19.2149C11.9557 19.7848 12.2981 20.3405 12.6477 20.882ZM17.9198 6.05585C18.5833 6.73981 19.2468 7.50213 19.9031 8.3357C19.2611 8.3072 18.6047 8.28583 17.9412 8.28583C17.2706 8.28583 16.6072 8.30008 15.958 8.3357C16.6 7.50213 17.2635 6.73981 17.9198 6.05585ZM12.6406 10.2522C12.291 10.8008 11.9414 11.3636 11.6133 11.9407C11.2851 12.5107 10.9783 13.0806 10.6858 13.6506C10.3006 12.6959 9.97243 11.7412 9.70133 10.815C10.6359 10.5942 11.6204 10.4018 12.6406 10.2522ZM6.18421 19.1721C3.65873 18.0963 2.02501 16.6856 2.02501 15.5671C2.02501 14.4485 3.65873 13.0308 6.18421 11.9621C6.79774 11.6985 7.46835 11.4634 8.16036 11.2425C8.567 12.6389 9.10206 14.0923 9.76554 15.5813C9.1092 17.0632 8.58127 18.5095 8.18176 19.8988C7.47548 19.678 6.80488 19.4357 6.18421 19.1721ZM10.0224 29.3531C9.05212 28.7973 8.63121 26.6814 8.95938 23.9598C9.03786 23.2901 9.16627 22.5848 9.32322 21.8652C10.7215 22.2072 12.2482 22.4708 13.8534 22.6418C14.8165 23.9598 15.8153 25.1567 16.8212 26.204C14.4955 28.3628 12.3124 29.5454 10.8285 29.5454C10.5075 29.5383 10.2364 29.4742 10.0224 29.3531ZM26.9445 23.9242C27.2798 26.6457 26.866 28.7617 25.9029 29.3246C25.6889 29.4528 25.4107 29.5098 25.0825 29.5098C23.6057 29.5098 21.4156 28.3343 19.0898 26.1898C20.0886 25.1425 21.0874 23.9527 22.0362 22.6346C23.6485 22.4636 25.1752 22.2 26.5735 21.8509C26.7376 22.5705 26.866 23.2616 26.9445 23.9242ZM29.6911 19.1721C29.0776 19.4357 28.407 19.6708 27.715 19.8917C27.3083 18.4953 26.7733 17.0419 26.1098 15.5528C26.7661 14.0709 27.2941 12.6247 27.6936 11.2354C28.3999 11.4562 29.0705 11.6985 29.6983 11.9621C32.2237 13.0379 33.8575 14.4485 33.8575 15.5671C33.8503 16.6856 32.2166 18.1034 29.6911 19.1721Z" fill="#61DAFB"/>
                  <path d="M17.9341 18.823C19.7347 18.823 21.1944 17.3653 21.1944 15.5671C21.1944 13.7689 19.7347 12.3112 17.9341 12.3112C16.1335 12.3112 14.6738 13.7689 14.6738 15.5671C14.6738 17.3653 16.1335 18.823 17.9341 18.823Z" fill="#61DAFB"/>
                </svg>
              </Box>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Design tools
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '22px', color: 'gray700' }}>
                Modulz generates a React icon component from your Figma or Sketch icons file.
              </Text>
            </Card>
            <Card>
              <Box mb="3">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                  <path d="M35.4412 15.5671C35.4412 13.2516 32.5377 11.0573 28.086 9.69649C29.1133 5.16528 28.6567 1.56027 26.6449 0.406098C26.1811 0.135366 25.639 0.00712442 25.0468 0.00712442V1.59589C25.375 1.59589 25.639 1.66002 25.8601 1.78113C26.8304 2.33685 27.2513 4.45283 26.9231 7.1744C26.8446 7.84411 26.7162 8.54944 26.5593 9.26901C25.161 8.92704 23.6343 8.66343 22.0291 8.49244C21.066 7.1744 20.0672 5.97748 19.0613 4.93017C21.387 2.77144 23.5701 1.58877 25.054 1.58877V0C23.0921 0 20.5238 1.39641 17.927 3.81875C15.3301 1.41066 12.7619 0.0284982 10.8 0.0284982V1.61727C12.2767 1.61727 14.4669 2.79282 16.7926 4.9373C15.7939 5.98461 14.7951 7.1744 13.8463 8.49244C12.2339 8.66343 10.7072 8.92704 9.30895 9.27614C9.14487 8.56368 9.02359 7.87261 8.93798 7.21002C8.60267 4.48845 9.01645 2.37247 9.97956 1.80963C10.1936 1.68139 10.4718 1.62439 10.8 1.62439V0.0356226C10.2007 0.0356226 9.65852 0.163864 9.18767 0.434596C7.18298 1.58877 6.73353 5.18666 7.76798 9.70361C3.33056 11.0715 0.441238 13.2587 0.441238 15.5671C0.441238 17.8826 3.34483 20.0769 7.79652 21.4377C6.7692 25.9689 7.22579 29.5739 9.23761 30.7281C9.70133 30.9988 10.2435 31.1271 10.8428 31.1271C12.8047 31.1271 15.373 29.7307 17.9698 27.3083C20.5666 29.7164 23.1349 31.0986 25.0968 31.0986C25.696 31.0986 26.2382 30.9703 26.7091 30.6996C28.7138 29.5454 29.1632 25.9475 28.1288 21.4306C32.5519 20.0698 35.4412 17.8754 35.4412 15.5671ZM26.1526 10.815C25.8886 11.7341 25.5605 12.6817 25.1895 13.6292C24.897 13.0593 24.5902 12.4893 24.2549 11.9193C23.9268 11.3494 23.5772 10.7937 23.2276 10.2522C24.2407 10.4018 25.218 10.5871 26.1526 10.815ZM22.8852 18.4027C22.3287 19.3645 21.758 20.2764 21.1659 21.1242C20.1029 21.2168 19.0256 21.2667 17.9412 21.2667C16.864 21.2667 15.7867 21.2169 14.7309 21.1314C14.1388 20.2835 13.5609 19.3787 13.0044 18.424C12.4622 17.4907 11.97 16.5432 11.5205 15.5885C11.9628 14.6338 12.4622 13.6791 12.9973 12.7458C13.5538 11.784 14.1245 10.872 14.7166 10.0242C15.7796 9.93159 16.8569 9.88172 17.9412 9.88172C19.0185 9.88172 20.0957 9.93159 21.1516 10.0171C21.7437 10.8649 22.3216 11.7697 22.8781 12.7244C23.4202 13.6577 23.9125 14.6053 24.3619 15.56C23.9125 16.5147 23.4202 17.4693 22.8852 18.4027ZM25.1895 17.4765C25.5747 18.4312 25.9029 19.3858 26.174 20.312C25.2394 20.54 24.2549 20.7324 23.2348 20.882C23.5843 20.3334 23.9339 19.7706 24.2621 19.1935C24.5902 18.6235 24.897 18.0464 25.1895 17.4765ZM17.9555 25.0783C17.292 24.3944 16.6286 23.6321 15.9722 22.7985C16.6143 22.827 17.2706 22.8484 17.9341 22.8484C18.6047 22.8484 19.2682 22.8341 19.9174 22.7985C19.2753 23.6321 18.6118 24.3944 17.9555 25.0783ZM12.6477 20.882C11.6347 20.7324 10.6573 20.5471 9.72273 20.3192C9.98669 19.4001 10.3149 18.4525 10.6858 17.505C10.9783 18.0749 11.2851 18.6449 11.6204 19.2149C11.9557 19.7848 12.2981 20.3405 12.6477 20.882ZM17.9198 6.05585C18.5833 6.73981 19.2468 7.50213 19.9031 8.3357C19.2611 8.3072 18.6047 8.28583 17.9412 8.28583C17.2706 8.28583 16.6072 8.30008 15.958 8.3357C16.6 7.50213 17.2635 6.73981 17.9198 6.05585ZM12.6406 10.2522C12.291 10.8008 11.9414 11.3636 11.6133 11.9407C11.2851 12.5107 10.9783 13.0806 10.6858 13.6506C10.3006 12.6959 9.97243 11.7412 9.70133 10.815C10.6359 10.5942 11.6204 10.4018 12.6406 10.2522ZM6.18421 19.1721C3.65873 18.0963 2.02501 16.6856 2.02501 15.5671C2.02501 14.4485 3.65873 13.0308 6.18421 11.9621C6.79774 11.6985 7.46835 11.4634 8.16036 11.2425C8.567 12.6389 9.10206 14.0923 9.76554 15.5813C9.1092 17.0632 8.58127 18.5095 8.18176 19.8988C7.47548 19.678 6.80488 19.4357 6.18421 19.1721ZM10.0224 29.3531C9.05212 28.7973 8.63121 26.6814 8.95938 23.9598C9.03786 23.2901 9.16627 22.5848 9.32322 21.8652C10.7215 22.2072 12.2482 22.4708 13.8534 22.6418C14.8165 23.9598 15.8153 25.1567 16.8212 26.204C14.4955 28.3628 12.3124 29.5454 10.8285 29.5454C10.5075 29.5383 10.2364 29.4742 10.0224 29.3531ZM26.9445 23.9242C27.2798 26.6457 26.866 28.7617 25.9029 29.3246C25.6889 29.4528 25.4107 29.5098 25.0825 29.5098C23.6057 29.5098 21.4156 28.3343 19.0898 26.1898C20.0886 25.1425 21.0874 23.9527 22.0362 22.6346C23.6485 22.4636 25.1752 22.2 26.5735 21.8509C26.7376 22.5705 26.866 23.2616 26.9445 23.9242ZM29.6911 19.1721C29.0776 19.4357 28.407 19.6708 27.715 19.8917C27.3083 18.4953 26.7733 17.0419 26.1098 15.5528C26.7661 14.0709 27.2941 12.6247 27.6936 11.2354C28.3999 11.4562 29.0705 11.6985 29.6983 11.9621C32.2237 13.0379 33.8575 14.4485 33.8575 15.5671C33.8503 16.6856 32.2166 18.1034 29.6911 19.1721Z" fill="#61DAFB"/>
                  <path d="M17.9341 18.823C19.7347 18.823 21.1944 17.3653 21.1944 15.5671C21.1944 13.7689 19.7347 12.3112 17.9341 12.3112C16.1335 12.3112 14.6738 13.7689 14.6738 15.5671C14.6738 17.3653 16.1335 18.823 17.9341 18.823Z" fill="#61DAFB"/>
                </svg>
              </Box>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Social media
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '22px', color: 'gray700' }}>
                Automatically post to Slack and Twitter each time you publish your design system.
              </Text>
            </Card>
            <Card>
              <Box mb="3">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                  <path d="M35.4412 15.5671C35.4412 13.2516 32.5377 11.0573 28.086 9.69649C29.1133 5.16528 28.6567 1.56027 26.6449 0.406098C26.1811 0.135366 25.639 0.00712442 25.0468 0.00712442V1.59589C25.375 1.59589 25.639 1.66002 25.8601 1.78113C26.8304 2.33685 27.2513 4.45283 26.9231 7.1744C26.8446 7.84411 26.7162 8.54944 26.5593 9.26901C25.161 8.92704 23.6343 8.66343 22.0291 8.49244C21.066 7.1744 20.0672 5.97748 19.0613 4.93017C21.387 2.77144 23.5701 1.58877 25.054 1.58877V0C23.0921 0 20.5238 1.39641 17.927 3.81875C15.3301 1.41066 12.7619 0.0284982 10.8 0.0284982V1.61727C12.2767 1.61727 14.4669 2.79282 16.7926 4.9373C15.7939 5.98461 14.7951 7.1744 13.8463 8.49244C12.2339 8.66343 10.7072 8.92704 9.30895 9.27614C9.14487 8.56368 9.02359 7.87261 8.93798 7.21002C8.60267 4.48845 9.01645 2.37247 9.97956 1.80963C10.1936 1.68139 10.4718 1.62439 10.8 1.62439V0.0356226C10.2007 0.0356226 9.65852 0.163864 9.18767 0.434596C7.18298 1.58877 6.73353 5.18666 7.76798 9.70361C3.33056 11.0715 0.441238 13.2587 0.441238 15.5671C0.441238 17.8826 3.34483 20.0769 7.79652 21.4377C6.7692 25.9689 7.22579 29.5739 9.23761 30.7281C9.70133 30.9988 10.2435 31.1271 10.8428 31.1271C12.8047 31.1271 15.373 29.7307 17.9698 27.3083C20.5666 29.7164 23.1349 31.0986 25.0968 31.0986C25.696 31.0986 26.2382 30.9703 26.7091 30.6996C28.7138 29.5454 29.1632 25.9475 28.1288 21.4306C32.5519 20.0698 35.4412 17.8754 35.4412 15.5671ZM26.1526 10.815C25.8886 11.7341 25.5605 12.6817 25.1895 13.6292C24.897 13.0593 24.5902 12.4893 24.2549 11.9193C23.9268 11.3494 23.5772 10.7937 23.2276 10.2522C24.2407 10.4018 25.218 10.5871 26.1526 10.815ZM22.8852 18.4027C22.3287 19.3645 21.758 20.2764 21.1659 21.1242C20.1029 21.2168 19.0256 21.2667 17.9412 21.2667C16.864 21.2667 15.7867 21.2169 14.7309 21.1314C14.1388 20.2835 13.5609 19.3787 13.0044 18.424C12.4622 17.4907 11.97 16.5432 11.5205 15.5885C11.9628 14.6338 12.4622 13.6791 12.9973 12.7458C13.5538 11.784 14.1245 10.872 14.7166 10.0242C15.7796 9.93159 16.8569 9.88172 17.9412 9.88172C19.0185 9.88172 20.0957 9.93159 21.1516 10.0171C21.7437 10.8649 22.3216 11.7697 22.8781 12.7244C23.4202 13.6577 23.9125 14.6053 24.3619 15.56C23.9125 16.5147 23.4202 17.4693 22.8852 18.4027ZM25.1895 17.4765C25.5747 18.4312 25.9029 19.3858 26.174 20.312C25.2394 20.54 24.2549 20.7324 23.2348 20.882C23.5843 20.3334 23.9339 19.7706 24.2621 19.1935C24.5902 18.6235 24.897 18.0464 25.1895 17.4765ZM17.9555 25.0783C17.292 24.3944 16.6286 23.6321 15.9722 22.7985C16.6143 22.827 17.2706 22.8484 17.9341 22.8484C18.6047 22.8484 19.2682 22.8341 19.9174 22.7985C19.2753 23.6321 18.6118 24.3944 17.9555 25.0783ZM12.6477 20.882C11.6347 20.7324 10.6573 20.5471 9.72273 20.3192C9.98669 19.4001 10.3149 18.4525 10.6858 17.505C10.9783 18.0749 11.2851 18.6449 11.6204 19.2149C11.9557 19.7848 12.2981 20.3405 12.6477 20.882ZM17.9198 6.05585C18.5833 6.73981 19.2468 7.50213 19.9031 8.3357C19.2611 8.3072 18.6047 8.28583 17.9412 8.28583C17.2706 8.28583 16.6072 8.30008 15.958 8.3357C16.6 7.50213 17.2635 6.73981 17.9198 6.05585ZM12.6406 10.2522C12.291 10.8008 11.9414 11.3636 11.6133 11.9407C11.2851 12.5107 10.9783 13.0806 10.6858 13.6506C10.3006 12.6959 9.97243 11.7412 9.70133 10.815C10.6359 10.5942 11.6204 10.4018 12.6406 10.2522ZM6.18421 19.1721C3.65873 18.0963 2.02501 16.6856 2.02501 15.5671C2.02501 14.4485 3.65873 13.0308 6.18421 11.9621C6.79774 11.6985 7.46835 11.4634 8.16036 11.2425C8.567 12.6389 9.10206 14.0923 9.76554 15.5813C9.1092 17.0632 8.58127 18.5095 8.18176 19.8988C7.47548 19.678 6.80488 19.4357 6.18421 19.1721ZM10.0224 29.3531C9.05212 28.7973 8.63121 26.6814 8.95938 23.9598C9.03786 23.2901 9.16627 22.5848 9.32322 21.8652C10.7215 22.2072 12.2482 22.4708 13.8534 22.6418C14.8165 23.9598 15.8153 25.1567 16.8212 26.204C14.4955 28.3628 12.3124 29.5454 10.8285 29.5454C10.5075 29.5383 10.2364 29.4742 10.0224 29.3531ZM26.9445 23.9242C27.2798 26.6457 26.866 28.7617 25.9029 29.3246C25.6889 29.4528 25.4107 29.5098 25.0825 29.5098C23.6057 29.5098 21.4156 28.3343 19.0898 26.1898C20.0886 25.1425 21.0874 23.9527 22.0362 22.6346C23.6485 22.4636 25.1752 22.2 26.5735 21.8509C26.7376 22.5705 26.866 23.2616 26.9445 23.9242ZM29.6911 19.1721C29.0776 19.4357 28.407 19.6708 27.715 19.8917C27.3083 18.4953 26.7733 17.0419 26.1098 15.5528C26.7661 14.0709 27.2941 12.6247 27.6936 11.2354C28.3999 11.4562 29.0705 11.6985 29.6983 11.9621C32.2237 13.0379 33.8575 14.4485 33.8575 15.5671C33.8503 16.6856 32.2166 18.1034 29.6911 19.1721Z" fill="#61DAFB"/>
                  <path d="M17.9341 18.823C19.7347 18.823 21.1944 17.3653 21.1944 15.5671C21.1944 13.7689 19.7347 12.3112 17.9341 12.3112C16.1335 12.3112 14.6738 13.7689 14.6738 15.5671C14.6738 17.3653 16.1335 18.823 17.9341 18.823Z" fill="#61DAFB"/>
                </svg>
              </Box>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Github
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '22px', color: 'gray700' }}>
                Learn how to make the most out of Modulz.
              </Text>
            </Card>
            <Card>
              <Box mb="3">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                  <path d="M35.4412 15.5671C35.4412 13.2516 32.5377 11.0573 28.086 9.69649C29.1133 5.16528 28.6567 1.56027 26.6449 0.406098C26.1811 0.135366 25.639 0.00712442 25.0468 0.00712442V1.59589C25.375 1.59589 25.639 1.66002 25.8601 1.78113C26.8304 2.33685 27.2513 4.45283 26.9231 7.1744C26.8446 7.84411 26.7162 8.54944 26.5593 9.26901C25.161 8.92704 23.6343 8.66343 22.0291 8.49244C21.066 7.1744 20.0672 5.97748 19.0613 4.93017C21.387 2.77144 23.5701 1.58877 25.054 1.58877V0C23.0921 0 20.5238 1.39641 17.927 3.81875C15.3301 1.41066 12.7619 0.0284982 10.8 0.0284982V1.61727C12.2767 1.61727 14.4669 2.79282 16.7926 4.9373C15.7939 5.98461 14.7951 7.1744 13.8463 8.49244C12.2339 8.66343 10.7072 8.92704 9.30895 9.27614C9.14487 8.56368 9.02359 7.87261 8.93798 7.21002C8.60267 4.48845 9.01645 2.37247 9.97956 1.80963C10.1936 1.68139 10.4718 1.62439 10.8 1.62439V0.0356226C10.2007 0.0356226 9.65852 0.163864 9.18767 0.434596C7.18298 1.58877 6.73353 5.18666 7.76798 9.70361C3.33056 11.0715 0.441238 13.2587 0.441238 15.5671C0.441238 17.8826 3.34483 20.0769 7.79652 21.4377C6.7692 25.9689 7.22579 29.5739 9.23761 30.7281C9.70133 30.9988 10.2435 31.1271 10.8428 31.1271C12.8047 31.1271 15.373 29.7307 17.9698 27.3083C20.5666 29.7164 23.1349 31.0986 25.0968 31.0986C25.696 31.0986 26.2382 30.9703 26.7091 30.6996C28.7138 29.5454 29.1632 25.9475 28.1288 21.4306C32.5519 20.0698 35.4412 17.8754 35.4412 15.5671ZM26.1526 10.815C25.8886 11.7341 25.5605 12.6817 25.1895 13.6292C24.897 13.0593 24.5902 12.4893 24.2549 11.9193C23.9268 11.3494 23.5772 10.7937 23.2276 10.2522C24.2407 10.4018 25.218 10.5871 26.1526 10.815ZM22.8852 18.4027C22.3287 19.3645 21.758 20.2764 21.1659 21.1242C20.1029 21.2168 19.0256 21.2667 17.9412 21.2667C16.864 21.2667 15.7867 21.2169 14.7309 21.1314C14.1388 20.2835 13.5609 19.3787 13.0044 18.424C12.4622 17.4907 11.97 16.5432 11.5205 15.5885C11.9628 14.6338 12.4622 13.6791 12.9973 12.7458C13.5538 11.784 14.1245 10.872 14.7166 10.0242C15.7796 9.93159 16.8569 9.88172 17.9412 9.88172C19.0185 9.88172 20.0957 9.93159 21.1516 10.0171C21.7437 10.8649 22.3216 11.7697 22.8781 12.7244C23.4202 13.6577 23.9125 14.6053 24.3619 15.56C23.9125 16.5147 23.4202 17.4693 22.8852 18.4027ZM25.1895 17.4765C25.5747 18.4312 25.9029 19.3858 26.174 20.312C25.2394 20.54 24.2549 20.7324 23.2348 20.882C23.5843 20.3334 23.9339 19.7706 24.2621 19.1935C24.5902 18.6235 24.897 18.0464 25.1895 17.4765ZM17.9555 25.0783C17.292 24.3944 16.6286 23.6321 15.9722 22.7985C16.6143 22.827 17.2706 22.8484 17.9341 22.8484C18.6047 22.8484 19.2682 22.8341 19.9174 22.7985C19.2753 23.6321 18.6118 24.3944 17.9555 25.0783ZM12.6477 20.882C11.6347 20.7324 10.6573 20.5471 9.72273 20.3192C9.98669 19.4001 10.3149 18.4525 10.6858 17.505C10.9783 18.0749 11.2851 18.6449 11.6204 19.2149C11.9557 19.7848 12.2981 20.3405 12.6477 20.882ZM17.9198 6.05585C18.5833 6.73981 19.2468 7.50213 19.9031 8.3357C19.2611 8.3072 18.6047 8.28583 17.9412 8.28583C17.2706 8.28583 16.6072 8.30008 15.958 8.3357C16.6 7.50213 17.2635 6.73981 17.9198 6.05585ZM12.6406 10.2522C12.291 10.8008 11.9414 11.3636 11.6133 11.9407C11.2851 12.5107 10.9783 13.0806 10.6858 13.6506C10.3006 12.6959 9.97243 11.7412 9.70133 10.815C10.6359 10.5942 11.6204 10.4018 12.6406 10.2522ZM6.18421 19.1721C3.65873 18.0963 2.02501 16.6856 2.02501 15.5671C2.02501 14.4485 3.65873 13.0308 6.18421 11.9621C6.79774 11.6985 7.46835 11.4634 8.16036 11.2425C8.567 12.6389 9.10206 14.0923 9.76554 15.5813C9.1092 17.0632 8.58127 18.5095 8.18176 19.8988C7.47548 19.678 6.80488 19.4357 6.18421 19.1721ZM10.0224 29.3531C9.05212 28.7973 8.63121 26.6814 8.95938 23.9598C9.03786 23.2901 9.16627 22.5848 9.32322 21.8652C10.7215 22.2072 12.2482 22.4708 13.8534 22.6418C14.8165 23.9598 15.8153 25.1567 16.8212 26.204C14.4955 28.3628 12.3124 29.5454 10.8285 29.5454C10.5075 29.5383 10.2364 29.4742 10.0224 29.3531ZM26.9445 23.9242C27.2798 26.6457 26.866 28.7617 25.9029 29.3246C25.6889 29.4528 25.4107 29.5098 25.0825 29.5098C23.6057 29.5098 21.4156 28.3343 19.0898 26.1898C20.0886 25.1425 21.0874 23.9527 22.0362 22.6346C23.6485 22.4636 25.1752 22.2 26.5735 21.8509C26.7376 22.5705 26.866 23.2616 26.9445 23.9242ZM29.6911 19.1721C29.0776 19.4357 28.407 19.6708 27.715 19.8917C27.3083 18.4953 26.7733 17.0419 26.1098 15.5528C26.7661 14.0709 27.2941 12.6247 27.6936 11.2354C28.3999 11.4562 29.0705 11.6985 29.6983 11.9621C32.2237 13.0379 33.8575 14.4485 33.8575 15.5671C33.8503 16.6856 32.2166 18.1034 29.6911 19.1721Z" fill="#61DAFB"/>
                  <path d="M17.9341 18.823C19.7347 18.823 21.1944 17.3653 21.1944 15.5671C21.1944 13.7689 19.7347 12.3112 17.9341 12.3112C16.1335 12.3112 14.6738 13.7689 14.6738 15.5671C14.6738 17.3653 16.1335 18.823 17.9341 18.823Z" fill="#61DAFB"/>
                </svg>
              </Box>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Npm
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '22px', color: 'gray700' }}>
                Learn how to make the most out of Modulz.
              </Text>
            </Card>
          </Grid>
          <Flex pt="8" pb="8" sx={{ justifyContent: 'center' }}>
            <Box as="p" size={4} sx={{ backgroundColor: 'blue100', py: '1', px: '2' }}>
              <Text as="p" size={0} weight="medium" sx={{ lineHeight: '1', textAlign: 'center', color: 'blue600', textTransform: 'uppercase', letterSpacing: '1.15px' }}>
                Deploy
              </Text>
            </Box>
          </Flex>
          <Flex pb="8" sx={{ justifyContent: 'center' }}>
            <Box as="p" size={4} sx={{ border: '1px dashed', borderColor: 'gray400', py: '1', px: '2' }}>
              <Text as="p" size={1} sx={{ lineHeight: '1', textAlign: 'center', color: 'gray900' }}>
                Modulz generates all the things
              </Text>
            </Box>
          </Flex>
          <Grid sx={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 5 }}>
            <Card>
              <Box mb="3">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                  <path d="M35.4412 15.5671C35.4412 13.2516 32.5377 11.0573 28.086 9.69649C29.1133 5.16528 28.6567 1.56027 26.6449 0.406098C26.1811 0.135366 25.639 0.00712442 25.0468 0.00712442V1.59589C25.375 1.59589 25.639 1.66002 25.8601 1.78113C26.8304 2.33685 27.2513 4.45283 26.9231 7.1744C26.8446 7.84411 26.7162 8.54944 26.5593 9.26901C25.161 8.92704 23.6343 8.66343 22.0291 8.49244C21.066 7.1744 20.0672 5.97748 19.0613 4.93017C21.387 2.77144 23.5701 1.58877 25.054 1.58877V0C23.0921 0 20.5238 1.39641 17.927 3.81875C15.3301 1.41066 12.7619 0.0284982 10.8 0.0284982V1.61727C12.2767 1.61727 14.4669 2.79282 16.7926 4.9373C15.7939 5.98461 14.7951 7.1744 13.8463 8.49244C12.2339 8.66343 10.7072 8.92704 9.30895 9.27614C9.14487 8.56368 9.02359 7.87261 8.93798 7.21002C8.60267 4.48845 9.01645 2.37247 9.97956 1.80963C10.1936 1.68139 10.4718 1.62439 10.8 1.62439V0.0356226C10.2007 0.0356226 9.65852 0.163864 9.18767 0.434596C7.18298 1.58877 6.73353 5.18666 7.76798 9.70361C3.33056 11.0715 0.441238 13.2587 0.441238 15.5671C0.441238 17.8826 3.34483 20.0769 7.79652 21.4377C6.7692 25.9689 7.22579 29.5739 9.23761 30.7281C9.70133 30.9988 10.2435 31.1271 10.8428 31.1271C12.8047 31.1271 15.373 29.7307 17.9698 27.3083C20.5666 29.7164 23.1349 31.0986 25.0968 31.0986C25.696 31.0986 26.2382 30.9703 26.7091 30.6996C28.7138 29.5454 29.1632 25.9475 28.1288 21.4306C32.5519 20.0698 35.4412 17.8754 35.4412 15.5671ZM26.1526 10.815C25.8886 11.7341 25.5605 12.6817 25.1895 13.6292C24.897 13.0593 24.5902 12.4893 24.2549 11.9193C23.9268 11.3494 23.5772 10.7937 23.2276 10.2522C24.2407 10.4018 25.218 10.5871 26.1526 10.815ZM22.8852 18.4027C22.3287 19.3645 21.758 20.2764 21.1659 21.1242C20.1029 21.2168 19.0256 21.2667 17.9412 21.2667C16.864 21.2667 15.7867 21.2169 14.7309 21.1314C14.1388 20.2835 13.5609 19.3787 13.0044 18.424C12.4622 17.4907 11.97 16.5432 11.5205 15.5885C11.9628 14.6338 12.4622 13.6791 12.9973 12.7458C13.5538 11.784 14.1245 10.872 14.7166 10.0242C15.7796 9.93159 16.8569 9.88172 17.9412 9.88172C19.0185 9.88172 20.0957 9.93159 21.1516 10.0171C21.7437 10.8649 22.3216 11.7697 22.8781 12.7244C23.4202 13.6577 23.9125 14.6053 24.3619 15.56C23.9125 16.5147 23.4202 17.4693 22.8852 18.4027ZM25.1895 17.4765C25.5747 18.4312 25.9029 19.3858 26.174 20.312C25.2394 20.54 24.2549 20.7324 23.2348 20.882C23.5843 20.3334 23.9339 19.7706 24.2621 19.1935C24.5902 18.6235 24.897 18.0464 25.1895 17.4765ZM17.9555 25.0783C17.292 24.3944 16.6286 23.6321 15.9722 22.7985C16.6143 22.827 17.2706 22.8484 17.9341 22.8484C18.6047 22.8484 19.2682 22.8341 19.9174 22.7985C19.2753 23.6321 18.6118 24.3944 17.9555 25.0783ZM12.6477 20.882C11.6347 20.7324 10.6573 20.5471 9.72273 20.3192C9.98669 19.4001 10.3149 18.4525 10.6858 17.505C10.9783 18.0749 11.2851 18.6449 11.6204 19.2149C11.9557 19.7848 12.2981 20.3405 12.6477 20.882ZM17.9198 6.05585C18.5833 6.73981 19.2468 7.50213 19.9031 8.3357C19.2611 8.3072 18.6047 8.28583 17.9412 8.28583C17.2706 8.28583 16.6072 8.30008 15.958 8.3357C16.6 7.50213 17.2635 6.73981 17.9198 6.05585ZM12.6406 10.2522C12.291 10.8008 11.9414 11.3636 11.6133 11.9407C11.2851 12.5107 10.9783 13.0806 10.6858 13.6506C10.3006 12.6959 9.97243 11.7412 9.70133 10.815C10.6359 10.5942 11.6204 10.4018 12.6406 10.2522ZM6.18421 19.1721C3.65873 18.0963 2.02501 16.6856 2.02501 15.5671C2.02501 14.4485 3.65873 13.0308 6.18421 11.9621C6.79774 11.6985 7.46835 11.4634 8.16036 11.2425C8.567 12.6389 9.10206 14.0923 9.76554 15.5813C9.1092 17.0632 8.58127 18.5095 8.18176 19.8988C7.47548 19.678 6.80488 19.4357 6.18421 19.1721ZM10.0224 29.3531C9.05212 28.7973 8.63121 26.6814 8.95938 23.9598C9.03786 23.2901 9.16627 22.5848 9.32322 21.8652C10.7215 22.2072 12.2482 22.4708 13.8534 22.6418C14.8165 23.9598 15.8153 25.1567 16.8212 26.204C14.4955 28.3628 12.3124 29.5454 10.8285 29.5454C10.5075 29.5383 10.2364 29.4742 10.0224 29.3531ZM26.9445 23.9242C27.2798 26.6457 26.866 28.7617 25.9029 29.3246C25.6889 29.4528 25.4107 29.5098 25.0825 29.5098C23.6057 29.5098 21.4156 28.3343 19.0898 26.1898C20.0886 25.1425 21.0874 23.9527 22.0362 22.6346C23.6485 22.4636 25.1752 22.2 26.5735 21.8509C26.7376 22.5705 26.866 23.2616 26.9445 23.9242ZM29.6911 19.1721C29.0776 19.4357 28.407 19.6708 27.715 19.8917C27.3083 18.4953 26.7733 17.0419 26.1098 15.5528C26.7661 14.0709 27.2941 12.6247 27.6936 11.2354C28.3999 11.4562 29.0705 11.6985 29.6983 11.9621C32.2237 13.0379 33.8575 14.4485 33.8575 15.5671C33.8503 16.6856 32.2166 18.1034 29.6911 19.1721Z" fill="#61DAFB"/>
                  <path d="M17.9341 18.823C19.7347 18.823 21.1944 17.3653 21.1944 15.5671C21.1944 13.7689 19.7347 12.3112 17.9341 12.3112C16.1335 12.3112 14.6738 13.7689 14.6738 15.5671C14.6738 17.3653 16.1335 18.823 17.9341 18.823Z" fill="#61DAFB"/>
                </svg>
              </Box>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Design tools
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '22px', color: 'gray700' }}>
                Modulz generates a React icon component from your Figma or Sketch icons file.
              </Text>
            </Card>
            <Card>
              <Box mb="3">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                  <path d="M35.4412 15.5671C35.4412 13.2516 32.5377 11.0573 28.086 9.69649C29.1133 5.16528 28.6567 1.56027 26.6449 0.406098C26.1811 0.135366 25.639 0.00712442 25.0468 0.00712442V1.59589C25.375 1.59589 25.639 1.66002 25.8601 1.78113C26.8304 2.33685 27.2513 4.45283 26.9231 7.1744C26.8446 7.84411 26.7162 8.54944 26.5593 9.26901C25.161 8.92704 23.6343 8.66343 22.0291 8.49244C21.066 7.1744 20.0672 5.97748 19.0613 4.93017C21.387 2.77144 23.5701 1.58877 25.054 1.58877V0C23.0921 0 20.5238 1.39641 17.927 3.81875C15.3301 1.41066 12.7619 0.0284982 10.8 0.0284982V1.61727C12.2767 1.61727 14.4669 2.79282 16.7926 4.9373C15.7939 5.98461 14.7951 7.1744 13.8463 8.49244C12.2339 8.66343 10.7072 8.92704 9.30895 9.27614C9.14487 8.56368 9.02359 7.87261 8.93798 7.21002C8.60267 4.48845 9.01645 2.37247 9.97956 1.80963C10.1936 1.68139 10.4718 1.62439 10.8 1.62439V0.0356226C10.2007 0.0356226 9.65852 0.163864 9.18767 0.434596C7.18298 1.58877 6.73353 5.18666 7.76798 9.70361C3.33056 11.0715 0.441238 13.2587 0.441238 15.5671C0.441238 17.8826 3.34483 20.0769 7.79652 21.4377C6.7692 25.9689 7.22579 29.5739 9.23761 30.7281C9.70133 30.9988 10.2435 31.1271 10.8428 31.1271C12.8047 31.1271 15.373 29.7307 17.9698 27.3083C20.5666 29.7164 23.1349 31.0986 25.0968 31.0986C25.696 31.0986 26.2382 30.9703 26.7091 30.6996C28.7138 29.5454 29.1632 25.9475 28.1288 21.4306C32.5519 20.0698 35.4412 17.8754 35.4412 15.5671ZM26.1526 10.815C25.8886 11.7341 25.5605 12.6817 25.1895 13.6292C24.897 13.0593 24.5902 12.4893 24.2549 11.9193C23.9268 11.3494 23.5772 10.7937 23.2276 10.2522C24.2407 10.4018 25.218 10.5871 26.1526 10.815ZM22.8852 18.4027C22.3287 19.3645 21.758 20.2764 21.1659 21.1242C20.1029 21.2168 19.0256 21.2667 17.9412 21.2667C16.864 21.2667 15.7867 21.2169 14.7309 21.1314C14.1388 20.2835 13.5609 19.3787 13.0044 18.424C12.4622 17.4907 11.97 16.5432 11.5205 15.5885C11.9628 14.6338 12.4622 13.6791 12.9973 12.7458C13.5538 11.784 14.1245 10.872 14.7166 10.0242C15.7796 9.93159 16.8569 9.88172 17.9412 9.88172C19.0185 9.88172 20.0957 9.93159 21.1516 10.0171C21.7437 10.8649 22.3216 11.7697 22.8781 12.7244C23.4202 13.6577 23.9125 14.6053 24.3619 15.56C23.9125 16.5147 23.4202 17.4693 22.8852 18.4027ZM25.1895 17.4765C25.5747 18.4312 25.9029 19.3858 26.174 20.312C25.2394 20.54 24.2549 20.7324 23.2348 20.882C23.5843 20.3334 23.9339 19.7706 24.2621 19.1935C24.5902 18.6235 24.897 18.0464 25.1895 17.4765ZM17.9555 25.0783C17.292 24.3944 16.6286 23.6321 15.9722 22.7985C16.6143 22.827 17.2706 22.8484 17.9341 22.8484C18.6047 22.8484 19.2682 22.8341 19.9174 22.7985C19.2753 23.6321 18.6118 24.3944 17.9555 25.0783ZM12.6477 20.882C11.6347 20.7324 10.6573 20.5471 9.72273 20.3192C9.98669 19.4001 10.3149 18.4525 10.6858 17.505C10.9783 18.0749 11.2851 18.6449 11.6204 19.2149C11.9557 19.7848 12.2981 20.3405 12.6477 20.882ZM17.9198 6.05585C18.5833 6.73981 19.2468 7.50213 19.9031 8.3357C19.2611 8.3072 18.6047 8.28583 17.9412 8.28583C17.2706 8.28583 16.6072 8.30008 15.958 8.3357C16.6 7.50213 17.2635 6.73981 17.9198 6.05585ZM12.6406 10.2522C12.291 10.8008 11.9414 11.3636 11.6133 11.9407C11.2851 12.5107 10.9783 13.0806 10.6858 13.6506C10.3006 12.6959 9.97243 11.7412 9.70133 10.815C10.6359 10.5942 11.6204 10.4018 12.6406 10.2522ZM6.18421 19.1721C3.65873 18.0963 2.02501 16.6856 2.02501 15.5671C2.02501 14.4485 3.65873 13.0308 6.18421 11.9621C6.79774 11.6985 7.46835 11.4634 8.16036 11.2425C8.567 12.6389 9.10206 14.0923 9.76554 15.5813C9.1092 17.0632 8.58127 18.5095 8.18176 19.8988C7.47548 19.678 6.80488 19.4357 6.18421 19.1721ZM10.0224 29.3531C9.05212 28.7973 8.63121 26.6814 8.95938 23.9598C9.03786 23.2901 9.16627 22.5848 9.32322 21.8652C10.7215 22.2072 12.2482 22.4708 13.8534 22.6418C14.8165 23.9598 15.8153 25.1567 16.8212 26.204C14.4955 28.3628 12.3124 29.5454 10.8285 29.5454C10.5075 29.5383 10.2364 29.4742 10.0224 29.3531ZM26.9445 23.9242C27.2798 26.6457 26.866 28.7617 25.9029 29.3246C25.6889 29.4528 25.4107 29.5098 25.0825 29.5098C23.6057 29.5098 21.4156 28.3343 19.0898 26.1898C20.0886 25.1425 21.0874 23.9527 22.0362 22.6346C23.6485 22.4636 25.1752 22.2 26.5735 21.8509C26.7376 22.5705 26.866 23.2616 26.9445 23.9242ZM29.6911 19.1721C29.0776 19.4357 28.407 19.6708 27.715 19.8917C27.3083 18.4953 26.7733 17.0419 26.1098 15.5528C26.7661 14.0709 27.2941 12.6247 27.6936 11.2354C28.3999 11.4562 29.0705 11.6985 29.6983 11.9621C32.2237 13.0379 33.8575 14.4485 33.8575 15.5671C33.8503 16.6856 32.2166 18.1034 29.6911 19.1721Z" fill="#61DAFB"/>
                  <path d="M17.9341 18.823C19.7347 18.823 21.1944 17.3653 21.1944 15.5671C21.1944 13.7689 19.7347 12.3112 17.9341 12.3112C16.1335 12.3112 14.6738 13.7689 14.6738 15.5671C14.6738 17.3653 16.1335 18.823 17.9341 18.823Z" fill="#61DAFB"/>
                </svg>
              </Box>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Social media
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '22px', color: 'gray700' }}>
                Automatically post to Slack and Twitter each time you publish your design system.
              </Text>
            </Card>
            <Card>
              <Box mb="3">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                  <path d="M35.4412 15.5671C35.4412 13.2516 32.5377 11.0573 28.086 9.69649C29.1133 5.16528 28.6567 1.56027 26.6449 0.406098C26.1811 0.135366 25.639 0.00712442 25.0468 0.00712442V1.59589C25.375 1.59589 25.639 1.66002 25.8601 1.78113C26.8304 2.33685 27.2513 4.45283 26.9231 7.1744C26.8446 7.84411 26.7162 8.54944 26.5593 9.26901C25.161 8.92704 23.6343 8.66343 22.0291 8.49244C21.066 7.1744 20.0672 5.97748 19.0613 4.93017C21.387 2.77144 23.5701 1.58877 25.054 1.58877V0C23.0921 0 20.5238 1.39641 17.927 3.81875C15.3301 1.41066 12.7619 0.0284982 10.8 0.0284982V1.61727C12.2767 1.61727 14.4669 2.79282 16.7926 4.9373C15.7939 5.98461 14.7951 7.1744 13.8463 8.49244C12.2339 8.66343 10.7072 8.92704 9.30895 9.27614C9.14487 8.56368 9.02359 7.87261 8.93798 7.21002C8.60267 4.48845 9.01645 2.37247 9.97956 1.80963C10.1936 1.68139 10.4718 1.62439 10.8 1.62439V0.0356226C10.2007 0.0356226 9.65852 0.163864 9.18767 0.434596C7.18298 1.58877 6.73353 5.18666 7.76798 9.70361C3.33056 11.0715 0.441238 13.2587 0.441238 15.5671C0.441238 17.8826 3.34483 20.0769 7.79652 21.4377C6.7692 25.9689 7.22579 29.5739 9.23761 30.7281C9.70133 30.9988 10.2435 31.1271 10.8428 31.1271C12.8047 31.1271 15.373 29.7307 17.9698 27.3083C20.5666 29.7164 23.1349 31.0986 25.0968 31.0986C25.696 31.0986 26.2382 30.9703 26.7091 30.6996C28.7138 29.5454 29.1632 25.9475 28.1288 21.4306C32.5519 20.0698 35.4412 17.8754 35.4412 15.5671ZM26.1526 10.815C25.8886 11.7341 25.5605 12.6817 25.1895 13.6292C24.897 13.0593 24.5902 12.4893 24.2549 11.9193C23.9268 11.3494 23.5772 10.7937 23.2276 10.2522C24.2407 10.4018 25.218 10.5871 26.1526 10.815ZM22.8852 18.4027C22.3287 19.3645 21.758 20.2764 21.1659 21.1242C20.1029 21.2168 19.0256 21.2667 17.9412 21.2667C16.864 21.2667 15.7867 21.2169 14.7309 21.1314C14.1388 20.2835 13.5609 19.3787 13.0044 18.424C12.4622 17.4907 11.97 16.5432 11.5205 15.5885C11.9628 14.6338 12.4622 13.6791 12.9973 12.7458C13.5538 11.784 14.1245 10.872 14.7166 10.0242C15.7796 9.93159 16.8569 9.88172 17.9412 9.88172C19.0185 9.88172 20.0957 9.93159 21.1516 10.0171C21.7437 10.8649 22.3216 11.7697 22.8781 12.7244C23.4202 13.6577 23.9125 14.6053 24.3619 15.56C23.9125 16.5147 23.4202 17.4693 22.8852 18.4027ZM25.1895 17.4765C25.5747 18.4312 25.9029 19.3858 26.174 20.312C25.2394 20.54 24.2549 20.7324 23.2348 20.882C23.5843 20.3334 23.9339 19.7706 24.2621 19.1935C24.5902 18.6235 24.897 18.0464 25.1895 17.4765ZM17.9555 25.0783C17.292 24.3944 16.6286 23.6321 15.9722 22.7985C16.6143 22.827 17.2706 22.8484 17.9341 22.8484C18.6047 22.8484 19.2682 22.8341 19.9174 22.7985C19.2753 23.6321 18.6118 24.3944 17.9555 25.0783ZM12.6477 20.882C11.6347 20.7324 10.6573 20.5471 9.72273 20.3192C9.98669 19.4001 10.3149 18.4525 10.6858 17.505C10.9783 18.0749 11.2851 18.6449 11.6204 19.2149C11.9557 19.7848 12.2981 20.3405 12.6477 20.882ZM17.9198 6.05585C18.5833 6.73981 19.2468 7.50213 19.9031 8.3357C19.2611 8.3072 18.6047 8.28583 17.9412 8.28583C17.2706 8.28583 16.6072 8.30008 15.958 8.3357C16.6 7.50213 17.2635 6.73981 17.9198 6.05585ZM12.6406 10.2522C12.291 10.8008 11.9414 11.3636 11.6133 11.9407C11.2851 12.5107 10.9783 13.0806 10.6858 13.6506C10.3006 12.6959 9.97243 11.7412 9.70133 10.815C10.6359 10.5942 11.6204 10.4018 12.6406 10.2522ZM6.18421 19.1721C3.65873 18.0963 2.02501 16.6856 2.02501 15.5671C2.02501 14.4485 3.65873 13.0308 6.18421 11.9621C6.79774 11.6985 7.46835 11.4634 8.16036 11.2425C8.567 12.6389 9.10206 14.0923 9.76554 15.5813C9.1092 17.0632 8.58127 18.5095 8.18176 19.8988C7.47548 19.678 6.80488 19.4357 6.18421 19.1721ZM10.0224 29.3531C9.05212 28.7973 8.63121 26.6814 8.95938 23.9598C9.03786 23.2901 9.16627 22.5848 9.32322 21.8652C10.7215 22.2072 12.2482 22.4708 13.8534 22.6418C14.8165 23.9598 15.8153 25.1567 16.8212 26.204C14.4955 28.3628 12.3124 29.5454 10.8285 29.5454C10.5075 29.5383 10.2364 29.4742 10.0224 29.3531ZM26.9445 23.9242C27.2798 26.6457 26.866 28.7617 25.9029 29.3246C25.6889 29.4528 25.4107 29.5098 25.0825 29.5098C23.6057 29.5098 21.4156 28.3343 19.0898 26.1898C20.0886 25.1425 21.0874 23.9527 22.0362 22.6346C23.6485 22.4636 25.1752 22.2 26.5735 21.8509C26.7376 22.5705 26.866 23.2616 26.9445 23.9242ZM29.6911 19.1721C29.0776 19.4357 28.407 19.6708 27.715 19.8917C27.3083 18.4953 26.7733 17.0419 26.1098 15.5528C26.7661 14.0709 27.2941 12.6247 27.6936 11.2354C28.3999 11.4562 29.0705 11.6985 29.6983 11.9621C32.2237 13.0379 33.8575 14.4485 33.8575 15.5671C33.8503 16.6856 32.2166 18.1034 29.6911 19.1721Z" fill="#61DAFB"/>
                  <path d="M17.9341 18.823C19.7347 18.823 21.1944 17.3653 21.1944 15.5671C21.1944 13.7689 19.7347 12.3112 17.9341 12.3112C16.1335 12.3112 14.6738 13.7689 14.6738 15.5671C14.6738 17.3653 16.1335 18.823 17.9341 18.823Z" fill="#61DAFB"/>
                </svg>
              </Box>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Github
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '22px', color: 'gray700' }}>
                Learn how to make the most out of Modulz.
              </Text>
            </Card>
            <Card>
              <Box mb="3">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                  <path d="M35.4412 15.5671C35.4412 13.2516 32.5377 11.0573 28.086 9.69649C29.1133 5.16528 28.6567 1.56027 26.6449 0.406098C26.1811 0.135366 25.639 0.00712442 25.0468 0.00712442V1.59589C25.375 1.59589 25.639 1.66002 25.8601 1.78113C26.8304 2.33685 27.2513 4.45283 26.9231 7.1744C26.8446 7.84411 26.7162 8.54944 26.5593 9.26901C25.161 8.92704 23.6343 8.66343 22.0291 8.49244C21.066 7.1744 20.0672 5.97748 19.0613 4.93017C21.387 2.77144 23.5701 1.58877 25.054 1.58877V0C23.0921 0 20.5238 1.39641 17.927 3.81875C15.3301 1.41066 12.7619 0.0284982 10.8 0.0284982V1.61727C12.2767 1.61727 14.4669 2.79282 16.7926 4.9373C15.7939 5.98461 14.7951 7.1744 13.8463 8.49244C12.2339 8.66343 10.7072 8.92704 9.30895 9.27614C9.14487 8.56368 9.02359 7.87261 8.93798 7.21002C8.60267 4.48845 9.01645 2.37247 9.97956 1.80963C10.1936 1.68139 10.4718 1.62439 10.8 1.62439V0.0356226C10.2007 0.0356226 9.65852 0.163864 9.18767 0.434596C7.18298 1.58877 6.73353 5.18666 7.76798 9.70361C3.33056 11.0715 0.441238 13.2587 0.441238 15.5671C0.441238 17.8826 3.34483 20.0769 7.79652 21.4377C6.7692 25.9689 7.22579 29.5739 9.23761 30.7281C9.70133 30.9988 10.2435 31.1271 10.8428 31.1271C12.8047 31.1271 15.373 29.7307 17.9698 27.3083C20.5666 29.7164 23.1349 31.0986 25.0968 31.0986C25.696 31.0986 26.2382 30.9703 26.7091 30.6996C28.7138 29.5454 29.1632 25.9475 28.1288 21.4306C32.5519 20.0698 35.4412 17.8754 35.4412 15.5671ZM26.1526 10.815C25.8886 11.7341 25.5605 12.6817 25.1895 13.6292C24.897 13.0593 24.5902 12.4893 24.2549 11.9193C23.9268 11.3494 23.5772 10.7937 23.2276 10.2522C24.2407 10.4018 25.218 10.5871 26.1526 10.815ZM22.8852 18.4027C22.3287 19.3645 21.758 20.2764 21.1659 21.1242C20.1029 21.2168 19.0256 21.2667 17.9412 21.2667C16.864 21.2667 15.7867 21.2169 14.7309 21.1314C14.1388 20.2835 13.5609 19.3787 13.0044 18.424C12.4622 17.4907 11.97 16.5432 11.5205 15.5885C11.9628 14.6338 12.4622 13.6791 12.9973 12.7458C13.5538 11.784 14.1245 10.872 14.7166 10.0242C15.7796 9.93159 16.8569 9.88172 17.9412 9.88172C19.0185 9.88172 20.0957 9.93159 21.1516 10.0171C21.7437 10.8649 22.3216 11.7697 22.8781 12.7244C23.4202 13.6577 23.9125 14.6053 24.3619 15.56C23.9125 16.5147 23.4202 17.4693 22.8852 18.4027ZM25.1895 17.4765C25.5747 18.4312 25.9029 19.3858 26.174 20.312C25.2394 20.54 24.2549 20.7324 23.2348 20.882C23.5843 20.3334 23.9339 19.7706 24.2621 19.1935C24.5902 18.6235 24.897 18.0464 25.1895 17.4765ZM17.9555 25.0783C17.292 24.3944 16.6286 23.6321 15.9722 22.7985C16.6143 22.827 17.2706 22.8484 17.9341 22.8484C18.6047 22.8484 19.2682 22.8341 19.9174 22.7985C19.2753 23.6321 18.6118 24.3944 17.9555 25.0783ZM12.6477 20.882C11.6347 20.7324 10.6573 20.5471 9.72273 20.3192C9.98669 19.4001 10.3149 18.4525 10.6858 17.505C10.9783 18.0749 11.2851 18.6449 11.6204 19.2149C11.9557 19.7848 12.2981 20.3405 12.6477 20.882ZM17.9198 6.05585C18.5833 6.73981 19.2468 7.50213 19.9031 8.3357C19.2611 8.3072 18.6047 8.28583 17.9412 8.28583C17.2706 8.28583 16.6072 8.30008 15.958 8.3357C16.6 7.50213 17.2635 6.73981 17.9198 6.05585ZM12.6406 10.2522C12.291 10.8008 11.9414 11.3636 11.6133 11.9407C11.2851 12.5107 10.9783 13.0806 10.6858 13.6506C10.3006 12.6959 9.97243 11.7412 9.70133 10.815C10.6359 10.5942 11.6204 10.4018 12.6406 10.2522ZM6.18421 19.1721C3.65873 18.0963 2.02501 16.6856 2.02501 15.5671C2.02501 14.4485 3.65873 13.0308 6.18421 11.9621C6.79774 11.6985 7.46835 11.4634 8.16036 11.2425C8.567 12.6389 9.10206 14.0923 9.76554 15.5813C9.1092 17.0632 8.58127 18.5095 8.18176 19.8988C7.47548 19.678 6.80488 19.4357 6.18421 19.1721ZM10.0224 29.3531C9.05212 28.7973 8.63121 26.6814 8.95938 23.9598C9.03786 23.2901 9.16627 22.5848 9.32322 21.8652C10.7215 22.2072 12.2482 22.4708 13.8534 22.6418C14.8165 23.9598 15.8153 25.1567 16.8212 26.204C14.4955 28.3628 12.3124 29.5454 10.8285 29.5454C10.5075 29.5383 10.2364 29.4742 10.0224 29.3531ZM26.9445 23.9242C27.2798 26.6457 26.866 28.7617 25.9029 29.3246C25.6889 29.4528 25.4107 29.5098 25.0825 29.5098C23.6057 29.5098 21.4156 28.3343 19.0898 26.1898C20.0886 25.1425 21.0874 23.9527 22.0362 22.6346C23.6485 22.4636 25.1752 22.2 26.5735 21.8509C26.7376 22.5705 26.866 23.2616 26.9445 23.9242ZM29.6911 19.1721C29.0776 19.4357 28.407 19.6708 27.715 19.8917C27.3083 18.4953 26.7733 17.0419 26.1098 15.5528C26.7661 14.0709 27.2941 12.6247 27.6936 11.2354C28.3999 11.4562 29.0705 11.6985 29.6983 11.9621C32.2237 13.0379 33.8575 14.4485 33.8575 15.5671C33.8503 16.6856 32.2166 18.1034 29.6911 19.1721Z" fill="#61DAFB"/>
                  <path d="M17.9341 18.823C19.7347 18.823 21.1944 17.3653 21.1944 15.5671C21.1944 13.7689 19.7347 12.3112 17.9341 12.3112C16.1335 12.3112 14.6738 13.7689 14.6738 15.5671C14.6738 17.3653 16.1335 18.823 17.9341 18.823Z" fill="#61DAFB"/>
                </svg>
              </Box>
              <Text as="p" size={3} weight="medium" mb="1" sx={{ lineHeight: '1' }}>
                Npm
              </Text>
              <Text as="p" size={2} sx={{ lineHeight: '22px', color: 'gray700' }}>
                Learn how to make the most out of Modulz.
              </Text>
            </Card>
          </Grid>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />
      <Box py={9}>
        <Container size={3}>
          <Heading as="h3" size={4} mb={2} sx={{ textAlign: 'center', fontWeight: 500 }}>
            Blog
          </Heading>
          <Text as="p" size={5} mb={7} sx={{ textAlign: 'center', color: 'gray700' }}>
            More about what we're doing.
          </Text>

          <BlogCardGrid>
            {(blogPosts as FrontMatter[]).slice(0, 4).map((frontMatter) => (
              <Box key={frontMatter.title} sx={{ flex: 1 }}>
                <BlogCard frontMatter={frontMatter} />
              </Box>
            ))}
          </BlogCardGrid>

          <Box mt={2}>
            <NextLink href="/blog" passHref>
              <Link>Browse all</Link>
            </NextLink>
          </Box>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <BetaAccess />
    </Box>
  );
};

export default Home;
