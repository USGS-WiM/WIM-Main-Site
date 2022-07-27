![WIM](wimlogo.png)


# WIM Website

WIM Main website. About, team, projects, geonarratives, and contact info. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node, npm.

Install with npm

```bash
npm install
```

## Building and testing

```bash
npm run serve
```
Uses [Parcel](https://parceljs.org) to compile and serve at localhost:1234

```bash
npm run build
```
Uses [Parcel](https://parceljs.org) to compile to the `/dist/` folder.

## Deployment

Pushing to `staging` deploys site to test.wim.usgs.gov.
Pushing to `master` deploys site to wim.usgs.gov.

Alternatively, upload the `/dist/` folder contents manually.

## Built With

* HTML
* [ParcelJS](https://parceljs.org/) - Build tool
* [SCSS](https://sass-lang.com/) - Styles
* [USWDS](https://designsystem.digital.gov/) - Design System

## Contributing

Please read [CONTRIBUTING.md]() for details on the process for submitting pull requests to us. Please read [CODE_OF_CONDUCT.md]() for details on adhering by the [USGS Code of Scientific Conduct](https://www2.usgs.gov/fsp/fsp_code_of_scientific_conduct.asp).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

Advance the version when adding features, fixing bugs or making minor enhancement. Follow semver principles. To add tag in git, type git tag v{major}.{minor}.{patch}. Example: git tag v2.0.5

To push tags to remote origin: `git push origin --tags`

*Note that your alias for the remote origin may differ.

## Authors

* **Mitch Samuels**  - *Lead Developer* - [USGS Web Informatics & Mapping](https://wim.usgs.gov/)

See also the list of [contributors](https://github.com/USGS-WIM/WIM-Main-Site/graphs/contributors) who participated in this project.

## License

This project is licensed under the Creative Commons CC0 1.0 Universal License - see the [LICENSE.md](LICENSE.md) file for details

## Suggested Citation
In the spirit of open source, please cite any re-use of the source code stored in this repository. Below is the suggested citation:

`This project contains code produced by the Web Informatics and Mapping (WIM) team at the United States Geological Survey (USGS). As a work of the United States Government, this project is in the public domain within the United States. https://wim.usgs.gov`

## About WIM
* This project authored by the [USGS WIM team](https://wim.usgs.gov)
* WIM is a team of developers and technologists who build and manage tools, software, web services, and databases to support USGS science and other federal government cooperators.
* WIM is a part of the [Upper Midwest Water Science Center](https://www.usgs.gov/centers/wisconsin-water-science-center).
