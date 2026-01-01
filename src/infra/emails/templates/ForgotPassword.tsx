import { Column } from '@react-email/column';
import { Heading } from '@react-email/heading';
import { Html } from '@react-email/html';
import { Row } from '@react-email/row';
import { Section } from '@react-email/section';
import React from 'react';

import { TailwindConfig } from './TailwindConfig';

interface IForgotPasswordProps {
  confirmationCode: string;
}

export default function ForgotPassword({ confirmationCode }: IForgotPasswordProps) {
  return (
    <Html>
      <TailwindConfig>
        <Section>
          <Row>
            <Column className="font-sans text-center pt-10">
              <Heading as="h1" className='text-2xl leading-[0]'>Recupere a sua conta</Heading>
              <Heading as="h2" className='font-normal text-base text-gray-600'>Recupere a sua senha e volte ao foco</Heading>
            </Column>
          </Row>

          <Row>
            <Column className="text-center pt-10">
              <span className='bg-gray-200 inline-block px-8 py-4 text-3xl font-sans rounded-md font-bold tracking-[16px]'>
                {confirmationCode}
              </span>
            </Column>
          </Row>

          <Row>
            <Column className="font-sans text-center pt-10">
              <Heading as="h1" className='text-sm text-gray-600'>
                Se você não solicitou esta troca, fique tranquilo, sua conta continua segura!
              </Heading>
            </Column>
          </Row>
        </Section>
      </TailwindConfig>
    </Html>
  )
}


ForgotPassword.PreviewProps = {
  confirmationCode: '336318',
}
