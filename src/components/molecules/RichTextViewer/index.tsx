import { client } from '@/sanity/client'
import {PortableText, PortableTextComponents} from '@portabletext/react'
import urlBuilder from '@sanity/image-url'

const components: PortableTextComponents = {
    block: {
        // Ex. 1: customizing common block types
        h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
        h3:({children}) => <h3 className='text-2xl my-5'>{children}</h3>,
        blockquote: ({children}) => <blockquote className="">{children}</blockquote>,

        p: ({children}) => <p className='mb-5'>{children}</p>,
        // Ex. 2: rendering custom styles
        customHeading: ({children}) => (
        <h2 className="text-lg text-primary">{children}</h2>
        ),
    },
    types: {
         // Block image (sits in its own block)
    blockImage: ({ value }) => {
        console.log(value,"valuee block image")
        return <img src={urlBuilder(client)
            .image(value)
            .fit('max')
            .auto('format')
            .url()} alt={value.alt || ''} className="block-image w-200 m-auto" />
      },
      // Inline image (sits inside text flow)
      inlineImage: ({ value }) => {
        console.log(value,"valuee inlinee image")

        return <img src={urlBuilder(client)
            .image(value)
            .fit('max')
            .auto('format')
            .url()} alt={value.alt || ''} 
            className="inline-image w-200 m-auto"  />
      }
    }
}

export const RichTextViewer = (value) => {
    console.log(value, "valueee")
return <div className='rich-text-viewer'>
    <PortableText value={value.value} components={components} />
</div>
}
