import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, FC } from 'react'
import styles from './styles.module.css'

export const ProjectElement: FC<{
  projectName: string
  backgroundImage: string
  route: string
  style?: CSSProperties
}> = ({
  projectName,
  backgroundImage,
  route,
  style
}) => {
  return (
    <Link href={route} passHref >
      <a target='_blank' referrerPolicy='no-referrer' style={{ height: 'fit-content' }}>
			<Box className={styles.projectContainer} position={'relative'} borderRadius='5px' width={'fit-content'} height={'200px'} padding={'0'} textAlign={'center'} _hover={{ transform: 'scale(1.003)' }} transition='0.3s ease' >
					<Image
						style={{ borderRadius: '5px' }}
						alt={projectName}
						objectFit='cover'
						width={300}
						height={200}
						src={backgroundImage}
					/>
          <Box className={styles.projectTextContainer} top={'140px'} bottom={'0'} left={'0'} right={'0'} position={'absolute'} borderRadius={'0 0 5px 5px'} transition={'0.4s ease'} display={'flex'} flexDirection={'column'} justifyContent={'center'} opacity={'0'} background={'#000'} height={'60px'} width={'100%'}>
						<Heading color={'#fff'} marginTop={'1 0px'}fontWeight={'bold'} fontSize={{ base: '1.1rem' }}>{projectName}</Heading>
						
					</Box>
        </Box>
			</a>
    </Link>
  )
}
