import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, FC } from 'react'
import styles from './styles.module.css'

export const ProjectElement: FC<{
  projectName: string
  projectCategory: string
  backgroundColor: string
  backgroundImage: string
  route: string
  style?: CSSProperties
}> = ({
  projectName,
  projectCategory,
  backgroundColor,
  backgroundImage,
  route,
  style
}) => {
  return (
    <Link href={route} passHref >
      <a target='_blank' referrerPolicy='no-referrer'>
			<Box padding={'0'} textAlign={'center'} _hover={{ transform: 'scale(1.008)' }} transition='0.3s ease'>
					<Image
						style={{ borderRadius: '5px' }}
						alt={projectName}
						objectFit='cover'
						width={300}
						height={200}
						src={backgroundImage}
					/>
          <Heading marginTop={'10px'} fontWeight={'bold'} fontSize={{ base: '1.1rem' }}>{projectName}</Heading>
          <Text fontSize={{ base: '1rem' }}>{projectCategory}</Text>
        </Box>
			</a>
    </Link>
  )
}
