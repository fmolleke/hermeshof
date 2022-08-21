---
title: HermesHof | Home
layout: PageLayout
sections:
  - elementId: ''
    colors: colors-a
    media:
      type: ImageBlock
      # url: /images/home.jpg
      altText: Kinder
      borderRadius: unset
    styles:
      self:
        height: auto
        width: full
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-0
          - pb-4
        alignItems: center
        justifyContent: center
        flexDirection: col-reverse
    type: HeroSection
  - elementId: ''
    colors: colors-a
    subtitle: >
      Die Kinder- und Jugendhilfe „HermesHof GmbH & Co. KG“ bietet Platz für 10 Kinder und Jugendliche im Regelbereich und 2 Plätze im Verselbständigungsbereich. Wir bieten den Bewohner*innen familienähnliche Strukturen und arbeiten mit dem systemischen Handlungsansatz auf Grundlage des § 27 i. V. m. §§ 34, 41 SGB VIII.
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
          - pt-4
          - pb-2
          - pr-3
          - pl-3
        alignItems: center
        justifyContent: center
      subtitle:
        textAlign: center
    type: HeroSection
  - colors: colors-a
    elementId: ''
    items:
      - type: FeaturedItem
        title: Über uns
        text: >
          Lernen Sie unser Team und unsere Geschichte kennen
        # featuredImage:
        #   url: /images/about-us.png
        #   altText: Über uns
        #   caption: Über uns
        #   elementId: ''
        #   styles:
        #     self:
        #       opacity: 100
        #   type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
        actions:
          - type: Link
            label: Mehr Informationen
            altText: ''
            url: /ueber-uns
            showIcon: true
            icon: arrowRight
            iconPosition: right
            elementId: ''
      - type: FeaturedItem
        title: Das Haus
        text: >
          Finden Sie hier alle Informationen über unsere Wohngruppe, unser Haus und weitere Bilder
        # featuredImage:
        #   url: /images/smarter.svg
        #   altText: Das Haus
        #   caption: Das Haus
        #   elementId: ''
        #   styles:
        #     self:
        #       opacity: 100
        #   type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
        actions:
          - type: Link
            label: Mehr Informationen
            altText: ''
            url: /das-haus
            showIcon: true
            icon: arrowRight
            iconPosition: right
            elementId: ''
      - type: FeaturedItem
        title: Kontakt
        text: >
          Sie möchten uns kontaktieren? Hier finden Sie alle Informationen über unsere Kontaktinformationen
        # featuredImage:
        #   url: /images/focused.svg
        #   altText: Kontakt
        #   caption: Kontakt
        #   elementId: ''
        #   styles:
        #     self:
        #       opacity: 100
        #   type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
        actions:
          - type: Link
            label: Mehr Informationen
            altText: ''
            url: /kontakt
            showIcon: true
            icon: arrowRight
            iconPosition: right
            elementId: ''
    columns: 3
    enableHover: false
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
          - pt-20
          - pb-20
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
        textAlign: center
      actions:
        justifyContent: flex-start
    type: FeaturedItemsSection
  - elementId: ''
    colors: colors-a
    variant: variant-b
    title: >-
      AKTUELLES
    actions:
      - type: Link
        label: Alle Posts ansehen
        url: /blog
        showIcon: true
        icon: arrowRight
    posts:
      - content/pages/blog/post-one.md
      - content/pages/blog/post-two.md
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
          - pt-0
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeaturedPostsSection
    showDate: true
---
