---
title: HermesHof | Kontakt
layout: PageLayout
sections:
  - type: FeaturedPeopleSection
    elementId: ''
    variant: variant-b
    colors: colors-a
    title: Kontakt
    actions: []
    people:
      - content/data/team/rene-hermes.json
      - content/data/team/manuela-robben.json
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
  - type: ContactSection
    elementId: ''
    colors: colors-h
    backgroundSize: full
    title: Kontakt
    #text: We look forward to hearing from you.
    form:
      type: FormBlock
      variant: variant-a
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: firma
          label: Firma *
          isRequired: 'true'
          width: full
        - type: TextFormControl
          name: vorname
          label: Vorname *
          isRequired: 'true'
          width: 1/2
        - type: TextFormControl
          name: nachname
          label: Nachname *
          isRequired: 'true'
          width: 1/2
        - type: EmailFormControl
          name: email
          label: E-Mail *
          isRequired: 'true'
          width: 1/2
        - type: TextFormControl
          name: telefon
          label: Telefon *
          isRequired: 'true'
          width: 1/2
        - type: TextareaFormControl
          name: nachricht
          label: Nachricht *
          isRequired: 'true'
          width: full
      submitLabel: Nachricht senden
    media: null
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      #text:
      #  textAlign: left
---
