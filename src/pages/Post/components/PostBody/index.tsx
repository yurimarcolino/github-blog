import { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { PostBodyContainer, PostBodyContent } from './styles'

interface PostBodyProps {
  content: string
}

export const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~`

export function PostBody({ content }: PostBodyProps) {
  return (
    <PostBodyContainer>
      <PostBodyContent>
        <ReactMarkdown
          children={content}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dark as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
        ,
      </PostBodyContent>
    </PostBodyContainer>
  )
}
