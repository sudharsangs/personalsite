import Image from 'next/image'
import { Github, Briefcase, User, LoaderPinwheel } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Project } from '@/types/projects'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface Props extends Project {
  index: number
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  type,
  github,
  index
}: Props) {
  const typeIcons = {
    personal: User,
    independent: LoaderPinwheel,
    work: Briefcase
  }

  const TypeIcon = typeIcons[type]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="max-h-96 transition-transform duration-300 ease-in-out transform overflow-hidden">
        <div className='bg-white overflow-hidden'>
          <img
            src={image}
            alt={`${title} project screenshot`}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
        </div>
        <Badge className="absolute top-2 right-2 flex items-center gap-1" variant={type === "personal" ? "default" : type === "independent" ? "destructive" : "secondary"}>
          <TypeIcon className="w-4 h-4" />
          <span className="capitalize">{type}</span>
        </Badge>
        <CardContent className="px-6 py-4 h-48">
          <motion.h3
            className="font-bold text-xl mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className={`text-base mb-4 ${Math.random() > 0.5 ? 'text-amber-300' : 'text-cyan-300'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex gap-2 mb-4 w-full overflow-x-auto whitespace-nowrap"
            style={{ scrollbarWidth: 'none' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            {technologies.map((tech, index) => {
              return (
                <span
                  key={index}
                  className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4 mr-2" />
                  <p className='mr-3'>{tech.name}</p>
                </span>
              )
            })}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
