import { Card, Column, Container, Section, Title } from "rbx"
import Header from "../../../components/header"
import LogoImage from '../../../assets/images/logo.png'
import '../../../styles/auth.scss'
import RegisterForm from "../../../components/auth/register_form"

const RegisterScreen = () => {
  return (
    <>
      <Header />
      <Section size="medium" className="auth">
        <Container>
          <Column.Group centered vcentered>
            <Column size={3}>
              <Card>
                <Card.Content>
                  <Column size={12}>
                      <img src={LogoImage} />
                  </Column>
                  <Column size={12}>
                    <Title size={6} className="has-text-grey has-text-centered">
                      Your notes on the cloud
                    </Title>
                  </Column>
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>
          <RegisterForm />
        </Container>
      </Section>
    </>
  )
}

export default RegisterScreen