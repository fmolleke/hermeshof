---
title: Home | HermesHof
layout: PageLayout
sections:
  - elementId: ''
    colors: colors-a
    media:
      type: ImageBlock
      url: /bilder/home.jpg
      altText: Kinder
      styles:
        self:
          width: '100%'
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
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: col
    type: HeroSection
  - elementId: ''
    colors: colors-a
    subtitle: >
      Die Kinder- und Jugendhilfe „Hermeshof GmbH & Co. KG“ bietet Platz für 12 unbegleitete, minderjährige Geflüchtete aus unterschiedlichen Herkunftsländern. Wir bieten den Bewohner*innen familienähnliche Strukturen und arbeiten mit dem systemischen Handlungsansatz auf Grundlage des § 27 i. V. m. §§ 34, 41, 42 SGB VIII.
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
          Lerne unser Team und unsere Geschichte kennen.
        styles:
          self:
            textAlign: left
            borderColor: border-blue
            borderWidth: 3
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
          Hier findest du alle Informationen über unsere Wohngruppe.
        styles:
          self:
            textAlign: left
            borderColor: border-pink
            borderWidth: 3
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
        title: Wir suchen dich!
        text: >
          Du bist auf der Suche nach einem neuen Job und hast Spaß an der Arbeit mit Kindern, Jugendlichen und jungen Volljährigen? Dann bewirb dich bei uns!
        styles:
          self:
            textAlign: left
            borderColor: border-yellow
            borderWidth: 3
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
            url: /karriere
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
      Aktuelles
    actions:
      - type: Link
        label: Alle Posts ansehen
        url: /blog
        showIcon: true
        icon: arrowRight
    posts:
      - content/pages/blog/5_ferienfreizeit_bensersiel.md
      - content/pages/blog/4_bubble_soccer.md
      # - content/pages/blog/3_projekt_sonnenliege.md
      # - content/pages/blog/2_tiergestuetzte_paedagogik.md
      # - content/pages/blog/1_lebenspraktische_faehigkeiten_erlernen.md
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
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeaturedPostsSection
    showDate: true
---
