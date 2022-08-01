import * as React from 'react';
import { Center, Box, Stack, HStack, VStack, Text, Button } from '@chakra-ui/react';

export default function Preferences() {
    return(
        <div className="content">

            <Center bg="white" color='black' borderRadius='30px' h="1100px">
                <Box p='5' w='1000px' h='auto' bg='lightgray' borderRadius='20px'>
                    <VStack spacing='24px'>
                        <Text fontSize='4xl' fontWeight='bold'>Edit Preferences</Text>
                        <Text> We want to be able to provide you with the best mentor. Please only select at most 2 'Me' Topics out of the 5 in each category that you seek to talk about with your mentor match.</Text>
                        <Text fontSize='2xl' fontWeight='bold'>Technical Areas</Text>
                        <HStack spacing='20px'>
                            <Button>
                                Web Apps
                            </Button>
                            <Button>
                                Mobile Apps
                            </Button>
                            <Button>
                                ML/Research
                            </Button>
                            <Button>
                                Programming Languages
                            </Button>
                            <Button>
                                Other/Doesn't Matter
                            </Button>
                        </HStack>

                        <Text fontSize='2xl' fontWeight='bold'>Education/Experience</Text>
                        <HStack spacing='20px'>
                            <Button>
                                High School
                            </Button>
                            <Button>
                                Emerging Talent
                            </Button>
                            <Button>
                                Experienced Talent ({'>'}5 YOE)
                            </Button>
                            <Button>
                                Other/Doesn't Matter
                            </Button>
                        </HStack>
                        <Text fontSize='2xl' fontWeight='bold'>Career Paths</Text>
                        <HStack spacing='20px'>
                            <Button>
                                UI/UX
                            </Button>
                            <Button>
                                DevOps
                            </Button>
                            <Button>
                                SWE
                            </Button>
                            <Button>
                                Game Dev
                            </Button>
                            <Button>
                                Other/Confused
                            </Button>
                        </HStack>

                        <Text fontSize='2xl' fontWeight='bold'>Job Application Prep</Text>
                        <HStack spacing='20px'>
                            <Button>
                                Behavioral Prep
                            </Button>
                            <Button>
                                Technical Interviews
                            </Button>
                            <Button>
                                Resume/CV
                            </Button>
                            <Button>
                                Navigating Career Fairs
                            </Button>
                        </HStack>

                        <Text fontSize='2xl' fontWeight='bold'>Diversity</Text>
                        <HStack spacing='20px'>
                            <Button>
                                LGBTQ+
                            </Button>
                            <Button>
                                URM
                            </Button>
                            <Button>
                                First Gen / Low Income
                            </Button>
                            <Button>
                                Disability
                            </Button>
                            <Button>
                                Veteran
                            </Button>
                        </HStack>

                        <HStack spacing='800px'>
                            <Button>
                                Cancel
                            </Button>
                            <Button colorScheme='red'>
                                Save
                            </Button>
                        </HStack>


                    </VStack>
                </Box>

            </Center>
        </div>

    );

}
